import styles from './index.module.css'

export default function Footer(){

    return(
        <div>
            <footer className={styles.footer}>
                <div className={styles.icons}>
                    <a href="https://github.com/lucasamscc" target='_blank'>github</a>
                    <a href="https://www.linkedin.com/in/lucas-de-andrade-martins-8252a41b2" target='_blank'>linkedin</a>
                        <p class="company-name">
                            Lucas Martins &copy; 2023, ALL Rights Reserved
                        </p>
                </div>
            </footer>
        </div>
    )
}