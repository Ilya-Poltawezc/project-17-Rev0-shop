import styles from './SectionGift.module.scss'
import One from '../../../assets/images/gifts/One.png'
import GiftOne from '../../iconsComponents/Gifts/GiftOne'
import GiftTwo from '../../iconsComponents/Gifts/GiftTwo'
import ButtomBuy from '../../Buttons/ButtonBuy'
import ButtomDatail from '../../Buttons/ButtonDetail'

export default function GiftCardOne() {
    return (
        <article className={styles.gift__block__cardOne}>
            <img src={One} alt="" />
            <div className={styles.gift__block__cardOne__div}>
                <div className={styles.gift__block__cardOne__div__block1}>
                    <p className={styles.gift__block__cardOne__div__block1__price}>285.000</p>
                    <h3 className={styles.gift__block__cardOne__div__block1__title}>Giftset "Vietnamese Filter Coffee"</h3>
                    <p className={styles.gift__block__cardOne__div__block1__descrp}>
                        A perfect gift for coffee connoisseurs. Revo carefully selects its coffee beans, roasts them using technology and techniques learned from renowned artisans, and combines them with the love and passion of coffee makers… creating pure cups of coffee just for you.
                    </p>
                </div>
                <div className={styles.gift__block__cardOne__div__block2}>
                    <div className={styles.gift__block__cardOne__div__block2__cell}>
                        <GiftOne />
                        <div className={styles.gift__block__cardOne__div__block2__cell__desc}>
                            <p className={styles.gift__block__cardOne__div__block2__cell__desc__p}>Seed type</p>
                            <p className={styles.gift__block__cardOne__div__block2__cell__desc__p}>Fine Robusta Blend</p>
                        </div>
                    </div>
                    <div className={styles.gift__block__cardOne__div__block2__cell}>
                        <GiftTwo />
                        <div className={styles.gift__block__cardOne__div__block2__cell__desc}>
                            <p className={styles.gift__block__cardOne__div__block2__cell__desc__p}>Elevation</p>
                            <p className={styles.gift__block__cardOne__div__block2__cell__desc__p}>700 - 800m</p>
                        </div>
                    </div>
                </div>
                <div className={styles.gift__block__cardOne__div__block3}>
                    <ButtomBuy />
                    <ButtomDatail />
                </div>
            </div>
        </article>
    )
}