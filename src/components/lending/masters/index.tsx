'use client'
import { IMaster } from '@/shared/types/commoin.interface'
import styles from './styles.module.scss'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/effect-coverflow'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useState } from 'react'
import cnBind from 'classnames/bind'
import Link from 'next/link'

const cx = cnBind.bind(styles)
interface IMastersProps {
    mastersList: IMaster[]
}
const MastersPreview = ({ mastersList }: IMastersProps) => {

    return (
        <div className={styles.mastersPreview}>
            <div className={styles.header}>
                <span className={styles.title}>Мастера массажа</span>
                <div className={styles.divider} />
                <span className={styles.subtitle}>
                    Наши мастера — это настоящие звезды этого удивительного эротического массажного салона в Калининграде. Экстравагантные, страстные и абсолютно преданные искусству расслабления, они создают уникальные моменты, наполняя ваши сеансы энергией и сексуальностью в рамках профессионализма, чтобы оставить вас в состоянии блаженства и абсолютной релаксации.
                </span>
            </div>
            <div className={styles.mastersList}>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={false}
                    slidesPerView={3}
                    loop={true}
                    loopAdditionalSlides={1}
                    coverflowEffect={{
                        rotate: 20,
                        stretch: 0,
                        depth: 50,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className={styles.swiper}
                    initialSlide={0}

                >
                    {mastersList.map((master, index) =>
                        <SwiperSlide key={index} style={{ backgroundColor: 'black' }} className={styles.masterCard} >
                            <Image quality={90} priority={true} src={master.img[0]} blurDataURL={master.placeholder} placeholder='blur' alt={master.name} height={200} width={200} className={styles.masterImg} />
                            <span className={styles.masterName}>{master.name}</span>
                            <Link className={styles.masterInfo} href={`masters/${master.id}`}>
                                Посмотреть профиль
                            </Link>
                        </SwiperSlide>

                    )}
                </Swiper>
            </div>
            <div className={styles.linkWrap}>
                <Link href={'/programs'} className={styles.link}>Посмотреть все </Link>
            </div>
        </div >
    )
}

export default MastersPreview