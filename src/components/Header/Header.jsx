import styles from './Header.module.scss'
import revoLogo from '../../assets/images/revoLogo.png'
import header_img from '../../assets/images/header_img.png'
import Backet from '../iconsComponents/Backet'
import { list } from './data'
import { CartContext } from '../../context/CardContext'
import { useContext, useState } from 'react'

export default function Header() {
    const { cart, removeFromCart, openCart } = useContext(CartContext)
    const [open, setOpen] = useState(false)

    const cartItems = cart || []
    const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
    )

    return (
        <header id='home' className={styles.header}>
            <div className={styles.header__div}>
                <div className={styles.header__div__div1}>
                    <a className={styles.header__div__div1__link} href="/">
                        <img className={styles.header__div__div1__link__img} src={revoLogo} alt="RevoLogo" />
                    </a>
                    <div className={styles.header__div__div1__block}>
                        <h1 className={styles.header__div__div1__block__h1}>your</h1>
                        <h1 className={styles.header__div__div1__block__b}>personalized</h1>
                        <h1 className={styles.header__div__div1__block__h1}>coffee</h1>
                    </div>
                </div>
                <img width={690} className={styles.header__div__img} src={header_img} alt="" />
                <div className={styles.header__div__div2}>
                   <button onClick={() => setOpen(!open)} className={styles.header__div__div2__bascket} href="/"><Backet /></button>
                {/* {Next we display the shopping cart itself, where they are added} */}
                  {cart.length === 0 ? <span className={`${styles.header__error} ${open ? styles.header__errorHide : ''}`}><p className={styles.header__error__p}>You haven't selected a product yet, go to the catalog!</p></span> : <div className={`${styles.header__openBasket} ${open ? styles.header__openBasketHide : ""}`}>
                        {cart.map((item) => (
                      <div key={item.id} className={styles.header__openBasket__card}>
                          <img width={100} height={60} src={item.image} alt={item.description} />
                      <div className={styles.header__openBasket__card__block2}>
                          <div>
                            <p className={styles.header__openBasket__card__block2__p}>{item.description}</p>
                            <span className={styles.header__openBasket__card__block2__span}>{item.price}</span>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className={styles.header__openBasket__card__block2__btn}>
                            delete
                          </button>
                      </div>
                    </div>
                  ))}
                  <div className={styles.header__openBasket__div}>
                    <div className={styles.header__openBasket__div__block1}>
                      <p className={styles.header__openBasket__div__block1__p}>
                        Total:
                      </p>
                      <p className={styles.header__openBasket__div__block1__price}>
                        {/* {here is the sum of goods, the function above is immediately after all states} */}
                        {total} $
                      </p>
                    </div>
                    <button onClick={openCart} className={styles.header__openBasket__div__button}>
                      Go to cart
                    </button>
                  </div>
                  </div>}
                    <nav className={styles.header__div__div2__nav}>
                        <ul className={styles.header__div__div2__nav__list}>
                            {list.map(({ id, label, href }) => (
                                <li key={id} className={styles.header__div__div2__nav__list__item}>
                                    <a className={styles.header__div__div2__nav__list__item__link} 
                                        href={href}>
                                            {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

// `${item.id}-${item.quantity}`