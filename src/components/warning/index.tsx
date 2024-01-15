'use client'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Cookies from 'js-cookie'
const WarningPopUp = () => {
    const [hiden, setHiden] = useState(true)
    const handleSetCookie = () => {
        const now = new Date();
        const expirationTime = new Date(now.getTime() + 86400000);
        Cookies.set('user_aged', 'true', { expires: expirationTime });
        setHiden(true)
    }
    const hadleCloseWebSite = () => {
        Cookies.remove('user_aged')
        window.location.href = 'https://google.com';
    }
    useEffect(() => {
        const accessCookie = Cookies.get('user_aged')
        if (!accessCookie) {
            setHiden(false)
            document.body.style.overflow = "hidden"
        }
        if (accessCookie) {
            document.body.style.overflow = "visible"

        }
    }, [hiden])
    return (
        <>
            {!hiden &&
                <div className={styles.warning_wrapper}>
                    <div className={styles.warning_shadow} />
                    <div className={styles.warning_box}>
                        <div className={styles.subtitle}>Подтвердите свой возраст</div>
                        <div className={styles.buttons_wrap}>
                            <button className={styles.confirm_btn} onClick={() => handleSetCookie()}>Да мне есть 18</button>
                            <button className={styles.confirm_btn} onClick={() => hadleCloseWebSite()}>Мне еще нет 18</button>
                        </div>
                        <div className={styles.addwarning_text}>
                            <div className={styles.circle}>
                                18+
                            </div>
                            <span className={styles.offerta}>
                                Информация, представленная на сайте magic39 предназначена только для лиц достигших 18 лет. Нажимая на кнопку «да» вы подтверждаете свое совершеннолетие.
                            </span>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default WarningPopUp