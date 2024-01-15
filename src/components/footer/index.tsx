'use client'
import { useState } from 'react';
import styles from './styles.module.scss'
import { Svg } from '@/shared/ui/Svg'
import copy from 'clipboard-copy';
import { contactsList } from '@/shared/Mocks/contacts';

export const Footer = () => {
    const [copied, setCopied] = useState(false)
    const handleCopyClick = (textToCopy: string) => {
        copy(textToCopy);
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 1000)
    };
    return (
        <div className={styles.footer}>
            <div className={styles.aboutUs}>
                <span className={styles.logoText}>MAGIC</span>
                <div className={styles.paymentsMethod}>
                    <Svg name={'MirPay'} className={styles.paymentIcon} />
                    <Svg name={'Visa'} className={styles.paymentIcon} />
                    <Svg name={'MasterCard'} className={styles.paymentIcon} />
                </div>
                <span className={styles.copyright}> Magic 2023 @ Все права защищены.</span>

            </div>

            <div className={styles.contacts}>
                <span className={styles.title}>Контакты</span>
                <a href={contactsList.geolocation} target="_blank" rel="noopener noreferrer"><span className={styles.subtitle}>Г.Калининград, Виллима Фермора 6</span></a>
                <a href={`tel:${contactsList.number}`} target="_blank" rel="noopener noreferrer"><span className={styles.subtitle} onClick={() => handleCopyClick(contactsList.number)}>{contactsList.optionalNumber} {copied && '\u2713'}
                </span></a>
                <div className={styles.socialNetworks}>
                    <a href={contactsList.telegram} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label='Magic39 Telegram App Link'>
                        <Svg name='Telegram' className={styles.socialIcon} />
                    </a>
                    <a href={contactsList.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label='Magic39 WhatsApp App Link'>
                        <Svg name='WhatsApp' className={styles.socialIcon} />
                    </a>
                    <a href={contactsList.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label='Magic39 Instagram App Link'>
                        <Svg name='Instagram' className={styles.socialIcon} />
                    </a>
                    <a href={contactsList.geolocation} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label='Magic39 address on yandex App Link'>
                        <Svg name='Geolocation' className={styles.socialIcon} />
                    </a>
                </div>

            </div>

        </div >
    )
}