import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from './index.module.css';
import api from "../../services/api";
import Logo from "../../components/Logo";
import PokedexImage from "../../components/PokedexImage";
import Footer from "../../components/Footer";
import Loading from "../../components/Loader";

export default function View(){
    
    const [imageUrl, setImageUrl] = useState("");
    const [data, setData] = useState([]);
    const {name} = useParams();
    const [isFlipped, setIsFlipped] = useState(false);
    const [whosThatPokemon, setWhosThatPokemon] = useState("./missingno.png");
    const [removeLoading, setRemoveLoading] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
          const response = await api.get(`/pokemon/${name}`);
          const data = response.data;
          setData(data);
          setRemoveLoading(true);
      
          if (data && data.sprites) {
            if(data.sprites.front_default){
              setImageUrl(data.sprites.front_default);
            }else{
              setWhosThatPokemon("/missingno.png");
            }    
          }
        }
      
        fetchData();
      }, [name]);
      
      const changePhoto = (e) => {
        if (isFlipped) {
          if (data.sprites.back_default) {
            setImageUrl(data.sprites.back_default);
          } else {
            alert("This Pokémon doesn't have a back side photo! :(");
            setImageUrl(data.sprites.front_default);
          }
        } else {
          setImageUrl(data.sprites.front_default);
        }
        setIsFlipped(!isFlipped);
      }
      
      
      return (
        <div className={styles.mainDiv}>
          <div className={styles.imageContainer}>
            <img className={styles.pokedexImg} src={"/imgPoke.png"} alt="pokedex image" />
            {!removeLoading && <Loading/>}           
            {imageUrl ? (
              <img className={styles.innerImage} src={imageUrl} alt={data.name} />
            ) : (
              <img  className={styles.innerImageWho} src={whosThatPokemon} alt={""}/>
            )}
            

            <div>
            <button className={styles.btnVoltar} onClick={(e) => changePhoto()}>Turn Image Here</button>
            </div>
          </div>
          <div className={styles.infoContainer}>
              <img  className={styles.pokedexImgOther} src={"/pokedex-other-img-copy.png"} alt="text side pokedex" />
              <div className={styles.innerText}>
                <p><strong> Name: </strong>{data.name}</p>
                <p><strong> Height: </strong>{data.height*2.54} CM</p>
                <p><strong> Weight: </strong> {(data.weight/2.205).toFixed(2)} KG</p>
                  {data.stats?.map((stat) => (
                    <p key={stat.stat.name}>
                      <strong>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}:</strong> {stat.base_stat}
                    </p>
                  ))}     
                <p><strong> Ability:</strong></p>
                <ul className={styles.list}>
                  {data.abilities?.map((ability) => (
                    <li key={ability.ability.name}>
                      {ability.ability.name}
                    </li> 
                  ))}
                </ul>
                <p><strong> Type:</strong></p>
                <ul className={styles.list}>
                  {data.types?.map((type) => (
                    <li key={type.type.name}>
                      {type.type.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link className={styles.btnVoltar} to={'/'}>Back</Link>
              </div>
              
          </div>
                
        </div>
      );
}