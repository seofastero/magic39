'use client'
import { useRef, useState } from 'react'
import styles from './styles.module.scss'
import { Svg } from '@/shared/ui/Svg'
import PersonCard from '@/components/personCard'
import Image from 'next/image'
import Link from 'next/link'
import { IMaster } from '@/shared/types/commoin.interface'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/effect-coverflow'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import { Navigation } from 'swiper/modules';
import cnBind from 'classnames/bind'

const cx = cnBind.bind(styles)
interface IMasterPageProps {
    masterData: IMaster,
    randomMasters: IMaster[],
    mastersLength: number
}
const MasterPage = ({ masterData, randomMasters, mastersLength }: IMasterPageProps) => {
    const swiperRef = useRef<SwiperRef>(null);
    const goToSlide = (index: number) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    const Characteristic = () => {
        return <div className={styles.char}>
            <div className={styles.char_box}>
                <div className={styles.char_icon}>
                    <Svg name='Money' className={styles.icon} />
                </div>
                <div className={styles.char_desc}>
                    <span>Возраст</span>
                    <span>{masterData?.age}</span>
                </div>
            </div>
            <div className={styles.char_box}>
                <div className={styles.char_icon}>
                    <Svg name='Money' className={styles.icon} />
                </div>
                <div className={styles.char_desc}>
                    <span>Рост</span>
                    <span>{masterData?.height}</span>
                </div>
            </div>
            <div className={styles.char_box}>
                <div className={styles.char_icon}>
                    <Svg name='Money' className={styles.icon} />
                </div>
                <div className={styles.char_desc}>
                    <span>Грудь</span>
                    <span>{masterData?.doobs}</span>
                </div>
            </div>
            <div className={styles.char_box}>
                <div className={styles.char_icon}>
                    <Svg name='Money' className={styles.icon} />
                </div>
                <div className={styles.char_desc}>
                    <span>Вес</span>
                    <span>{masterData?.weight}</span>
                </div>
            </div>

        </div>
    }
    return <div className={styles.wrapper}>

        <div className={styles.main}>
            <div className={styles.masters_wrapper}>
                <div className={styles.header}>
                    <span className={styles.title}>{masterData?.name}</span>
                    <span className={styles.subtitle}>Portfolio</span>
                </div>
                {masterData &&
                    <div className={styles.master_info}>
                        <div className={styles.char_mobile}>
                            <Characteristic />
                        </div>
                        <div className={styles.left}>
                            <Swiper
                                navigation={{ enabled: true, nextEl: `.btnNext`, prevEl: `.btnPrev` }}
                                modules={[Navigation]}
                                className={styles.swiper}
                                pagination={true}
                                ref={swiperRef}

                            >
                                <div className={'btnNext'}>{'>'}</div>
                                <div className={'btnPrev'}>{'<'}</div>
                                {masterData.img.map((image, index) =>
                                    <SwiperSlide key={index} className={cx(['program'])}>
                                        <Image quality={100} src={image} height={500} width={500} alt={masterData?.name} className={styles.main_img} />
                                        <div className={styles.working_time}>
                                            <div className={styles.point} />
                                            <span>{masterData.workStart} - {masterData.workEnd}</span>
                                        </div>

                                    </SwiperSlide>

                                )}


                            </Swiper>

                        </div>
                        <div className={styles.right}>
                            <div className={styles.char_desktop}>
                                <Characteristic />
                            </div>
                            <div className={styles.photos}>
                                {masterData.img.map((masterImg, index) =>
                                    <Image quality={90} key={index} src={masterImg} height={800} width={800} alt={masterData.name} className={styles.alt_image}
                                        onClick={() => goToSlide(index)}
                                    />
                                )}
                            </div>
                        </div>

                    </div>}

                {randomMasters && randomMasters.length > 1 &&
                    <div className={styles.additional}>
                        <div className={styles.additional_title}>
                            Другие девушки:
                        </div>
                        <div className={styles.masters_list}>
                            {randomMasters.map((person, index) =>
                                <PersonCard person={person} key={index} />
                            )}

                        </div>
                        <div className={styles.more_btn}>
                            <Link href={'/masters'} prefetch>Посмотреть еще ({mastersLength})</Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    </div>
}



export default MasterPage