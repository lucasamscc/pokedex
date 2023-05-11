import styles from './index.module.css';

export default function Logo(){
    return(
        <img className={styles.logoPoke} src="/pokedex-logo.png" alt="logo pokedex" />
    )
}