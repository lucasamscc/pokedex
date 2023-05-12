import styles from './index.module.css'

export default function Loading(){
    return(
        <div>
            <img className={styles.loadingS} src="/loading6.gif" alt="loading" />
        </div>
    )
}