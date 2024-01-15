'use client'
import styles from './styles.module.scss'
import Image from 'next/image'
import { IDiscount } from '@/shared/types/commoin.interface'
import cnBind from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const cx = cnBind.bind(styles)
interface IDiscountProps {
    discountsList: IDiscount[]
}
const DiscountPreview = ({ discountsList }: IDiscountProps) => {

    return (
        <div className={styles.discountPreview}>
            <div className={styles.header}>
                <span className={styles.title}>
                    Акции
                </span>
                <div className={styles.divider} />
                <span className={styles.subtitle}>
                    Погрузитесь в настоящее удовольствие с нашими уникальными акционными предложениями, созданными для вашего полного удовлетворения.
                </span>
            </div>
            <Swiper
                style={{ backgroundColor: 'black' }}
                speed={1000}
                parallax={true}
                pagination={{ clickable: true, dynamicBullets: true }}
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                className={styles.swiper}
            >
                {discountsList.map((discount, index) =>
                    <SwiperSlide key={index} style={{ backgroundColor: 'black' }}
                        className={styles.swiperSlide}
                    >
                        <div
                            className={styles.discountCard}>
                            <div className={styles.overlay} />
                            <Image priority={true} quality={60} src={discount.img} height={400} width={1000} alt={discount.name} className={styles.discountImg}
                            />
                            <div className={styles.description}>
                                <span className={styles.title}>{discount.name}</span>
                                <span className={styles.subtitle}>{discount.description}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}
export default DiscountPreview