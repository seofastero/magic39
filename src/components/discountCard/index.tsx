'use client'
import Image from 'next/image'
import styles from './styles.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(styles)
interface IDiscountCard {
    image: string,
    name: string,
    description: string
    placeholder: string
}
const DiscountCard = ({ image, name, description, placeholder }: IDiscountCard) => {


    return (
        <div className={cx([styles.discountCard])}>
            <div className={styles.overlay} />
            <Image blurDataURL={placeholder} placeholder='blur' quality={80} src={image} height={300} width={1000} alt={name} className={styles.discountImg} />
            <div className={styles.description}>
                <span className={styles.title}>{name}</span>
                <span className={styles.subtitle}>{description}</span>
                <button className={styles.openPopUp_btn} >Подробнее</button>
            </div>

        </div >
    )
}
export default DiscountCard