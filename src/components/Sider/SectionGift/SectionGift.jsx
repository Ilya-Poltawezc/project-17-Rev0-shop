import styles from './SectionGift.module.scss'
import GiftCardOne from './GiftCardOne'

export default function GiftSection() {
    return (
        <section className={styles.gift}>
            <div className={styles.gift__div}>
                <div className={styles.gift__div__div1}>
                    <p className={styles.gift__div__div1__p}>Best Gift For Best Friend</p>
                    <h2 className={styles.gift__div__div1__h2}>GIFTSET</h2>
                </div>
                <div className={styles.gift__div__div2}>
                    <div className={styles.gift__block}>
                        <GiftCardOne />
                    </div>
                    <div className={styles.gift__div__div2__buttons}>
                        <button className={styles.gift__div__div2__buttons__button}>1</button>
                        <button className={styles.gift__div__div2__buttons__button}>2</button>
                        <button className={styles.gift__div__div2__buttons__button}>3</button>
                    </div>
                </div>
            </div>
        </section>
    )
}