import styles from "./CatalogSection.module.scss"
import { catalog } from "./catalog.data"
import ButtomBuy from "../../Buttons/ButtonBuy"
import ButtomDatail from "../../Buttons/ButtonDetail"
import Swap from "../../iconsComponents/Swap"

export default function CatalogSection() {
    return (
        <section className={styles.catalog}>
            <div className={styles.catalog__div}>
                <div className={styles.catalog__div__div1}>
                    <p className={styles.catalog__div__div1__p}>Choose Your Favorite</p>
                    <h2 className={styles.catalog__div__div1__h2}>PERFECT TASTE</h2>
                </div>
                <div className={styles.catalog__div__div2}>
                    {catalog.map(({id, img, price, title, label}) => (
                        <article key={id} className={styles.catalog__div__div2__card}>
                            <img className={styles.catalog__div__div2__card__img} src={img} alt="" />
                            <div className={styles.catalog__div__div2__card__block}>
                                <div className={styles.catalog__div__div2__card__block__cell}>
                                    <p className={styles.catalog__div__div2__card__block__cell__price}>{price}</p>
                                    <h3 className={styles.catalog__div__div2__card__block__cell__title}>{title}</h3>
                                </div>
                                <p className={styles.catalog__div__div2__card__block__label}>{label}</p>
                                <div className={styles.catalog__div__div2__card__block__buttons}>
                                    <ButtomBuy />
                                    <ButtomDatail />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <button className={styles.catalog__div__spaw}>
                    <Swap />
                </button>
            </div>
        </section>
    )
}