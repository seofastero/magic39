'use client'
import styles from './styles.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import { interiorList } from '@/shared/Mocks/interior'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper } from 'swiper/types'

const InteriorPage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
    return <div className={styles.wrapper} >
        <main className={styles.main}>
            <div className={styles.rooms_wrapper} id='main'>
                <div className={styles.header}>
                    <span className={styles.title}>ИНТЕРЬЕР</span>
                    <span className={styles.subtitle}>MAGIC</span>
                </div>
                {interiorList.length > 1 ?
                    <div className={styles.roomsList}>
                        <SwiperComponent
                            spaceBetween={5}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null, slideThumbActiveClass: `${styles.activeThumb}` }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className={styles.swiper2}
                            navigation={{ enabled: true, nextEl: `.btnNext`, prevEl: `.btnPrev` }}
                        >
                            <div className={'btnNext'}>{'>'}</div>
                            <div className={'btnPrev'}>{'<'}</div>
                            {interiorList && interiorList.map((interior, index) =>
                                <SwiperSlide key={index} className={styles.slider2} >
                                    <Image priority={true} src={interior.img[0]} height={900} width={900} alt={interior.name} className={styles.mainImage} />
                                </SwiperSlide>
                            )}
                        </SwiperComponent>
                        <SwiperComponent
                            onSwiper={setThumbsSwiper}
                            spaceBetween={3}
                            slidesPerView={8}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className={styles.swiper}
                        >
                            {interiorList && interiorList.map((interior, index) =>
                                <SwiperSlide key={index} className={styles.slider}>
                                    <Image src={interior.img[0]} height={300} width={300} alt={interior.name} className={styles.altImage} />
                                </SwiperSlide>
                            )}
                        </SwiperComponent>
                    </div> : <div className={styles.empty}>Скоро будут добавленны...</div>

                }

            </div>
        </main>
    </div>

}

export default InteriorPage