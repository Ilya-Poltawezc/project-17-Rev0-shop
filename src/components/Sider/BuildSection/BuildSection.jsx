import styles from './BuildSection.module.scss'
import clsx from 'clsx';
import Source from '../../iconsComponents/Build/Source'
import Nuts from '../../iconsComponents/Build/Nuts'
import Quality from '../../iconsComponents/Build/Quality'
import Bartending from '../../iconsComponents/Build/Bartending'

export default function BuildSection() {
    return (
        <section className={styles.build}>
            <div className={clsx('container', styles.build__div)}>
                <div className={styles.build__div__div1}>
                    <p className={styles.build__div__div1__description}>
                        Your Personalized Coffee
                    </p>
                    <h2>COFFEE BUILD YOUR BASE</h2>
                </div>
                <div className={styles.build__div__div2}>
                    <article className={styles.build__div__div2__card}>
                        <Source />

                        <p className={styles.build__div__div2__card__title}>Sourse</p>
                        <p className={styles.build__div__div2__card__description}>
                            These Arabica and Robusta coffee beans meet international quality standards.
                        </p>
                    </article>
                    <article className={styles.build__div__div2__card}>
                        <Nuts />

                        <p className={styles.build__div__div2__card__title}>Nuts</p>
                        <p className={styles.build__div__div2__card__description}>
                            Each individual coffee bean represents a process of intense concentration by the coffee artisan.
                        </p>
                    </article>
                    <article className={styles.build__div__div2__card}>
                        <Quality />

                        <p className={styles.build__div__div2__card__title}>Quality</p>
                        <p className={styles.build__div__div2__card__description}>
                            70% of the quality of a cup of coffee comes from the origin and quality of the green beans.
                        </p>
                    </article>
                    <article className={styles.build__div__div2__card}>
                        <Bartending />

                        <p className={styles.build__div__div2__card__title}>Bartending</p>
                        <p className={styles.build__div__div2__card__description}>
                            The coffee beans undergo a meticulous and rigorous roasting and grinding process.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}