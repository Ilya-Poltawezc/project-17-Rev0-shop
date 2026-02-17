import styles from './Header.module.scss'
import revoLogo from '../../assets/images/revoLogo.png'
import header_img from '../../assets/images/header_img.png'
import Backet from '../iconsComponents/Backet'
import { list } from './data'

export default function Header() {
    return (
        <header className={styles.header}>
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
                    <button className={styles.header__div__div2__bascket}>
                        <Backet />
                    </button>
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