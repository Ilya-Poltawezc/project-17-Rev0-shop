import styles from './Buttons.module.scss'

export default function ButtomBuy({onClick}) {
    return (
        <button onClick={onClick} className={styles.buttonBuy}>buy now</button>
    )
}