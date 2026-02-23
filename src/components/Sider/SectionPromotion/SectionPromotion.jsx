import styles from "./SectionPromotion.module.scss"
import { promotion } from "./promotion.data"
import ButtomBuy from "../../Buttons/ButtonBuy"
import ButtomDatail from "../../Buttons/ButtonDetail"
import Swap from "../../iconsComponents/Swap"
import { useRef } from "react"

export default function SectionPromotion() {
    const containerRef = useRef(null)

    const scrollRight = () => {
    containerRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
        })
    }

    return (
        <section className={styles.promotion}>
            <div className={styles.promotion__div}>
                <div className={styles.promotion__div__div1}>
                    <p className={styles.promotion__div__div1__p}>Choose Your Favorite</p>
                    <h2 className={styles.promotion__div__div1__h2}>PERFECT TASTE</h2>
                </div>
                <div className={styles.promotion__container}>
                    <div ref={containerRef} className={styles.promotion__div__div2}>
                    {promotion.map(({id, img, price, title, label, promotion}) => (
                        <article key={id} className={styles.promotion__div__div2__card}>
                            <img width={360} height={300} className={styles.promotion__div__div2__card__img} src={img} alt="" />
                            <div className={styles.promotion__div__div2__card__block}>
                                <div className={styles.promotion__div__div2__card__block__cell}>
                                    <div className={styles.promotion__div__div2__card__block__cell__div}>
                                        <p className={styles.promotion__div__div2__card__block__cell__div__price}>{price}</p>
                                        <p className={styles.promotion__div__div2__card__block__cell__div__prom}>{promotion}</p>
                                    </div>
                                    <h3 className={styles.promotion__div__div2__card__block__cell__title}>{title}</h3>
                                </div>
                                <p className={styles.promotion__div__div2__card__block__label}>{label}</p>
                                <div className={styles.promotion__div__div2__card__block__buttons}>
                                    <ButtomBuy />
                                    <ButtomDatail />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <button  onClick={scrollRight} className={styles.promotion__div__spaw}>
                    <Swap />
                </button>
                </div>
            </div>
        </section>
    )
}