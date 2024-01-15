'use client'
import { navLinks } from '@/shared/Mocks/navlinks'
import styles from './styles.module.scss'
import cnBind from 'classnames/bind'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const cx = cnBind.bind(styles)
interface IDropDownProps {
    menuOpen: boolean
    handleCloseMenu: () => void
}
export const DropDownMenu = ({ menuOpen, handleCloseMenu }: IDropDownProps) => {
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
        <div className={cx([styles.wrapper, menuOpen ? `dropdown_active` : 'dropdown_notactive'])}>
            <div className={cx([`dropdown_menu`])} ref={rootElement}>
                {navLinks.map((nav, index) =>
                    <li key={index}>
                        <Link href={nav.link} className={styles.nav_link} onClick={() => handleCloseMenu()}>
                            <span className={styles.nav_text}>
                                {nav.title}
                            </span>
                        </Link>
                    </li>
                )}
            </div>
            <div className={cx([styles.overlay])} />
        </div>
    )
}