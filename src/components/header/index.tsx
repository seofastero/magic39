'use client'
import { Svg } from '@/shared/ui/Svg'
import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { CSSProperties, FC, useState } from 'react'
import { DropDownMenu } from '../dropdown'
import cnBind from 'classnames/bind'
import ContactsMenu from '../contactsMenu'
import { contactsList } from '@/shared/Mocks/contacts'
const cx = cnBind.bind(styles)

interface IHeader {
    position: CSSProperties['position']
}
const Header: FC<IHeader> = ({ position = 'sticky' }) => {
    const [contactsMenu, setContactsMenu] = useState(false)
    const [navMenu, setNavMenu] = useState(false)

    return (

        <div className={cx(['header', `${position}`])}>

            <div className={styles.left}>
                <button className={styles.dropdown_btn} onClick={() => setNavMenu(true)} role="button" aria-label='Dropdown menu with links on other pages '>
                    <Svg name='List' className={styles.dropdown_icon} />
                </button>
                <div className={styles.address}>
                    <Svg name='Geolocation' className={styles.address_icon} />
                    <span className={styles.address_text}>
                        {contactsList.address}
                    </span>
                </div>
            </div>
            <div className={styles.center}>
                <Link href={'/'}>
                    <Image src={'/logo.png'} alt='Magic logo' className={styles.logo} width={90} height={90} />
                </Link>

            </div>
            <div className={styles.right} onClick={() => setContactsMenu(true)}>
                <a className={styles.number}>{contactsList.optionalNumber}</a>
                <a className={styles.order}>Заказать звонок</a>
                <Svg name='PhoneDefault' className={styles.contact_icon} />

            </div>
            <ContactsMenu menuOpen={contactsMenu} handleCloseMenu={() => setContactsMenu(false)} />
            <DropDownMenu menuOpen={navMenu} handleCloseMenu={() => setNavMenu(false)} />
        </div>



    )
}
export default Header