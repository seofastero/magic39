import { FC, useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import { Svg } from '@/shared/ui/Svg'
import { contactsList } from '@/shared/Mocks/contacts'
interface IContactsMenu {
    menuOpen: boolean,
    handleCloseMenu: () => void
}
const ContactsMenu: FC<IContactsMenu> = ({ menuOpen, handleCloseMenu }) => {
    const rootElement = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const onClick = (event: { target: unknown }) => {
            if (
                rootElement.current &&
                !rootElement.current.contains(event.target as HTMLInputElement)
            ) {
                handleCloseMenu()
            }
        }
        document.addEventListener('click', onClick)
        return () => {
            document.removeEventListener('click', onClick)
        }
    }, [handleCloseMenu])
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible'

        }
    }, [menuOpen])

    return (
        <>
            {menuOpen &&
                <div className={styles.contactsPopUp} >
                    <div className={styles.formShadow} />
                    <div className={styles.formBox} ref={rootElement}>
                        <div className={styles.subtitle}>Записаться</div>
                        <div className={styles.buttons}>
                            <a href={`tel:${contactsList.number}`} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <button className={styles.confirmBtn}>
                                    <Svg name='Phone' className={styles.socialIcon} />
                                    <span className={styles.socialName}>Позвонить</span>

                                </button>
                            </a>
                            <a href={contactsList.telegram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <button className={styles.confirmBtn}>
                                    <Svg name='Telegram' className={styles.socialIcon} />
                                    <span className={styles.socialName}>Telegram</span>
                                </button>
                            </a>

                            <a href={contactsList.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <button className={styles.confirmBtn}>
                                    <Svg name='WhatsApp' className={styles.socialIcon} />
                                    <span className={styles.socialName}>WhatsApp</span>
                                </button>
                            </a>
                            <a href={contactsList.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <button className={styles.confirmBtn}>
                                    <Svg name='Instagram' className={styles.socialIcon} />
                                    <span className={styles.socialName}>Instagram</span>
                                </button>
                            </a>
                            <a href={contactsList.geolocation} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <button className={styles.confirmBtn}>
                                    <Svg name='Geolocation' className={styles.socialIcon} />
                                    <span className={styles.socialName}>Как добраться?</span>

                                </button>
                            </a>
                        </div>
                        <div className={styles.additionalInfo}>
                            <span className={styles.socialDescription}>{contactsList.optionalNumber}</span>
                            <span className={styles.socialDescription}>Ул. Виллимма Фермора 6</span>
                        </div>
                        <button className={styles.closeBtn} onClick={() => handleCloseMenu()}>✖</button>
                        <div className={styles.addWarningText}>
                            <div className={styles.circle}>
                                18+
                            </div>
                            <span className={styles.offert}>
                                Информация, представленная на сайте magic39 предназначена только для лиц достигших 18 лет. Нажимая на кнопку «да» вы подтверждаете свое совершеннолетие.
                            </span>
                        </div>
                    </div>
                </div >
            }
        </>
    )
}
export default ContactsMenu