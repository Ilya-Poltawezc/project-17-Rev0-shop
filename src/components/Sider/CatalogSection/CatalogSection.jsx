import styles from "./CatalogSection.module.scss"
import { catalog } from "./catalog.data"
import ButtomBuy from "../../Buttons/ButtonBuy"
import ButtomDatail from "../../Buttons/ButtonDetail"
import Swap from "../../iconsComponents/Swap"
import { useRef, useContext } from "react"
import { CartContext } from "../../../context/CardContext"

export default function CatalogSection() {
    const { addToCart } = useContext(CartContext)
    const containerRef = useRef(null)

    const scrollRight = () => {
    containerRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
        })
    }

    return (
        <section id="catalog" className={styles.catalog}>
            <div className={styles.catalog__div}>
                <div className={styles.catalog__div__div1}>
                    <p className={styles.catalog__div__div1__p}>Choose Your Favorite</p>
                    <h2 className={styles.catalog__div__div1__h2}>PERFECT TASTE</h2>
                </div>
                <div className={styles.catalog__container}>
                    <div ref={containerRef} className={styles.catalog__div__div2}>
                    {catalog.map((product) => (
                        <article key={product.id} className={styles.catalog__div__div2__card}>
                            <img className={styles.catalog__div__div2__card__img} src={product.img} alt="" />
                            <div className={styles.catalog__div__div2__card__block}>
                                <div className={styles.catalog__div__div2__card__block__cell}>
                                    <p className={styles.catalog__div__div2__card__block__cell__price}>{product.price}</p>
                                    <h3 className={styles.catalog__div__div2__card__block__cell__title}>{product.title}</h3>
                                </div>
                                <p className={styles.catalog__div__div2__card__block__label}>{product.label}</p>
                                <div className={styles.catalog__div__div2__card__block__buttons}>
                                    <ButtomBuy onClick={() => {addToCart(product)}} />
                                    <ButtomDatail />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <button  onClick={scrollRight} className={styles.catalog__div__spaw}>
                    <Swap />
                </button>
                </div>
            </div>
        </section>
    )
}