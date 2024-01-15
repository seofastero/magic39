'use client'
import { IMaster } from '@/shared/types/commoin.interface'
import styles from './styles.module.scss'
import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
interface ICard {
    person: IMaster
}
const PersonCard: FC<ICard> = ({ person }) => {
    return (<Link href={`/masters/${person.id}`} className={styles.link_wrap} prefetch>
        <div className={styles.person} >
            <div className={styles.info_bar}>
                <span className={styles.person_name}>{person.name}</span>
            </div>
            <div className={styles.working_time}>
                <div className={styles.point} />
                <span className={styles.time_text}>{person.workStart} - {person.workEnd}</span>
            </div>
            <Image quality={75} blurDataURL={person.placeholder} placeholder='blur' src={person.img[0]} alt={person.name} loading={'lazy'} width={400} height={400} />
            <div className={styles.description}> {person.name}</div>
        </div>
    </Link>)

}
export default PersonCard