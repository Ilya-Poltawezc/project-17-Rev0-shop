import styles from './SectionGift.module.scss'
import GiftCardOne from './GiftCardOne'
import GiftCardTwo from './GiftCardTwo'
import GiftCardThree from './GiftCardThree'
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

export default function GiftSection() {
    const [tab, setTab] = useState('main')

    return (
        <section id='giftset' className={styles.gift}>
            <div className={styles.gift__div}>
                <div className={styles.gift__div__div1}>
                    <p className={styles.gift__div__div1__p}>Best Gift For Best Friend</p>
                    <h2 className={styles.gift__div__div1__h2}>GIFTSET</h2>
                </div>
                <div className={styles.gift__div__div2}>
                    <div className={styles.gift__block}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={tab}
                                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut"
                                }}
                            >
                                {tab === 'main' && <GiftCardOne />}
                                {tab === 'cardTwo' && <GiftCardTwo />}
                                {tab === 'cardThree' && <GiftCardThree />}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className={styles.gift__div__div2__buttons}>
                       <button onClick={() => setTab('main')} className={`${styles.gift__div__div2__buttons__button} ${tab === 'main' ? styles.gift__div__div2__buttons__buttonActive : ''}`}>1</button>
                       <button onClick={() => setTab('cardTwo')} className={`${styles.gift__div__div2__buttons__button} ${tab === 'cardTwo' ? styles.gift__div__div2__buttons__buttonActive : ''}`}>2</button>
                       <button onClick={() => setTab('cardThree')} className={`${styles.gift__div__div2__buttons__button} ${tab === 'cardThree' ? styles.gift__div__div2__buttons__buttonActive : ''}`}>3</button>
                    </div>
                </div>
            </div>
        </section>
    )
}