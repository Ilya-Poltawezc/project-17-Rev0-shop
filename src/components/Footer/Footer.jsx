import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__div}>
                <p className={styles.footer__div__p}>© Revo Coffee Vietnam - 2018</p>
            </div>
        </footer>
    )
}