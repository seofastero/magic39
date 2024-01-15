'use client'
import styles from './styles.module.scss'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { Svg } from '@/shared/ui/Svg'
import { contactsList } from '@/shared/Mocks/contacts';

const ContactsPage = () => {
    const defaultState = {
        center: [54.74610, 20.485990],
        zoom: 16,
    };
    return <div className={styles.wrapper} >
        <div className={styles.main}>
            <div className={styles.contacts_wrapper}>
                <div className={styles.header}>
                    <h1 className={styles.title}>КОНТАКТЫ</h1>
                    <h2 className={styles.subtitle}>MAGIC</h2>
                </div>
                <div className={styles.body_wrapper}>
                    <div className={styles.contacts_box}>
                        <a href={`tel:${contactsList.number}`} target="_blank" rel="noopener noreferrer" className={styles.social_link}>
                            <button className={styles.confirm_btn}>
                                <Svg name='Phone' className={styles.social_icon} />
                                <span className={styles.social_name}>Позвонить</span>

                            </button>
                        </a>
                        <a href={contactsList.telegram} target="_blank" rel="noopener noreferrer" className={styles.social_link}>
                            <button className={styles.confirm_btn}>
                                <Svg name='Telegram' className={styles.social_icon} />
                                <span className={styles.social_name}>Telegram</span>
                            </button>
                        </a>

                        <a href={contactsList.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.social_link}>
                            <button className={styles.confirm_btn}>
                                <Svg name='WhatsApp' className={styles.social_icon} />
                                <span className={styles.social_name}>WhatsApp</span>
                            </button>
                        </a>
                        <a href={contactsList.instagram} target="_blank" rel="noopener noreferrer" className={styles.social_link}>
                            <button className={styles.confirm_btn}>
                                <Svg name='Instagram' className={styles.social_icon} />
                                <span className={styles.social_name}>Instagram</span>
                            </button>
                        </a>
                        <a href={contactsList.geolocation} target="_blank" rel="noopener noreferrer" className={styles.social_link}>
                            <button className={styles.confirm_btn}>
                                <Svg name='Geolocation' className={styles.social_icon} />
                                <span className={styles.social_name}>Как добраться?</span>

                            </button>
                        </a>
                    </div>

                    <div className={styles.map_box}>
                        <YMaps>
                            <Map defaultState={defaultState} width={'100%'} height={'100%'}>
                                <Placemark
                                    geometry={[54.74575, 20.485909]}
                                    properties={{
                                        hintContent: 'Magic Spa Salon'
                                    }}
                                    options={{
                                        iconLayout: 'default#image', // Задаем, что мы будем использовать изображение в качестве иконки
                                        iconImageHref: '/placemark1.png', // Путь к вашей иконке
                                        iconImageSize: [160, 103],
                                        iconOffset: [-22, -56]
                                    }} />
                            </Map>
                        </YMaps>
                    </div>

                </div>

            </div>
        </div>
    </div>
}

export default ContactsPage