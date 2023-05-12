import { useCallback, useEffect, useState } from "react";
import api from '../../services/api';
import styles from './index.module.css';
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";

export default function Home(props) {

  const [pokemons, setPokemons] = useState({ length: 0, results: [], next: '', previous: '' });
  const [cpokemons, setCPokemons] = useState([]);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/pokemon?limit=1500')
        .then(response => response.data)
        .then(data => data)
      setPokemons(response)
      console.log(response)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const startIndex = currentPage * pokemonsPerPage;
    const endOfIndex = startIndex + pokemonsPerPage;
    if (pokemons.results.length <= 0) {
      return;
    }
    setCPokemons(
      pokemons.results.slice(startIndex, endOfIndex)
    );

    console.log(cpokemons)
  }, [pokemons, currentPage])

  useEffect(() => {
    setCurrentPage(0)
  },[pokemonsPerPage])

  const pages = pokemons && pokemons.count && pokemonsPerPage > 0 ? Math.ceil(pokemons.count/ pokemonsPerPage) : 0;

  return (
    <div className={styles.mainDiv}>
      <div className={styles.listDiv}>
        {cpokemons && (
        <ul>
          {cpokemons.map((pokemon) => (
            <li className={styles.list} key={pokemon.id}>
              <Link className={styles.btnVisualizar} to={"/view/" + pokemon.name}>{pokemon.name}</Link>
            </li>
          ))}
        </ul> 
        )}
      </div>
      <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
}
