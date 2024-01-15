'use client'
import styles from './styles.module.scss'
import { Svg } from '@/shared/ui/Svg'
import cnBind from 'classnames/bind'
const cx = cnBind.bind(styles)
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IProgram } from '@/shared/types/commoin.interface'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';
interface IProgramsProps {
    programsList: IProgram[]
}
const ProgramsPreview = ({ programsList }: IProgramsProps) => {
    //
    const swiperRef = useRef<SwiperRef>(null);
    const goToSlide = (index: number) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };
    return (
        <div className={styles.programsPreview} >
            <div className={styles.header}>
                <span className={styles.title}>
                    Программы
                </span>
                <div className={styles.divider} />
                <span className={styles.subtitle}>
                    Опыт блаженства в нашем салоне заставляет гостей возвращаться снова и снова, чтобы ощутить все удовольствие от каждой программы массажа.
                </span>
            </div>
            <div className={styles.programs}>
                <div className={styles.left}>
                    <Swiper
                        navigation={{ enabled: true, nextEl: `.btnNext`, prevEl: `.btnPrev` }}
                        modules={[Navigation]}
                        className={styles.mySwiper}
                        ref={swiperRef}
                        pagination={true}

                    >
                        <div className={'btnNext'}>{'>'}</div>

                        <div className={'btnPrev'}>{'<'}</div>
                        {programsList.map((program, index) =>
                            <SwiperSlide key={index} className={cx(['program'])}>

                                <div className={styles.overlay} />
                                <Image quality={50} priority={true} src={program.img} height={1000} width={1000} alt={program.name} className={styles.currentImg} />
                                <div className={styles.description}>
                                    <span className={styles.title}>{program.name}</span>
                                    <div className={styles.timing}>
                                        <div className={styles.value}>
                                            <Svg name='Money' className={styles.icon} />
                                            <span>{program.time} минут</span>
                                        </div>
                                        <div className={styles.value}>
                                            <Svg name='Time' className={styles.icon} />
                                            <span>{program.price}₽</span>
                                        </div>
                                    </div>
                                    <div className={styles.programList}>
                                        <span className={styles.programTitle}>Программа:</span>
                                        <ul>
                                            {program.actions.map((action, index) =>
                                                <li key={index}>{action.name}</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>

                            </SwiperSlide>

                        )}


                    </Swiper>

                </div>
                <div className={styles.right}>
                    <div className={styles.altPrograms}>
                        {programsList.map((program, index) =>
                            <div className={styles.box} key={index} onClick={() => goToSlide(index)}>
                                <div className={styles.overlay} />
                                <button className={styles.altBtn}>{program.name}</button>
                                <Image quality={30} priority={true} alt={program.name} src={program.img} height={500} width={500} className={styles.boxImg} />
                            </div>
                        )}
                    </div>
                </div>

            </div>
            <div className={styles.linkWrap}>
                <Link href={'/programs'} className={styles.link}>Посмотреть все ({programsList.length})</Link>
            </div>
        </div>

    )
}

export default ProgramsPreview
