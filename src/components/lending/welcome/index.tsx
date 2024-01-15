'use client'
import Image from 'next/image'
import styles from './styles.module.scss'
import { useState } from 'react'
import ContactsMenu from '@/components/contactsMenu'

const WelcomePreview = () => {
    const [contactsMenu, setContactsMenu] = useState(false)
    return (
        <section className={styles.presentBlock} id='home'>
            <div className={styles.logo}>
                <span className={styles.subtitle}>Мужской <br /> СПА-клуб</span>
                <span className={styles.title}>MAGIC</span>
                <a className={styles.callBtn} onClick={() => setContactsMenu(true)}>Позвонить</a>
            </div>
            <div className={styles.overlay} />
            <Image src={'/mainbg.jpg'}
                quality={80}
                priority={true}
                alt='Magic spa saloon'
                width={1920}
                height={1200}
                className={styles.bgImg}
            />
            <ContactsMenu menuOpen={contactsMenu} handleCloseMenu={() => setContactsMenu(false)} />
        </section>
    )
}
export default WelcomePreview