import styles from './styles.module.scss'
import DiscountCard from '@/components/discountCard'
import { IDiscount } from '@/shared/types/commoin.interface'

interface ICouponsProps {
    couponsList: IDiscount[]
}

const CouponsPage = ({ couponsList }: ICouponsProps) => {


    return <div className={styles.wrapper} >
        <div className={styles.main}>
            <div className={styles.discountsWrapper}>
                <div className={styles.header}>
                    <span className={styles.title}>БОНУСЫ </span>
                    <span className={styles.subtitle}>MAGIC</span>
                </div>
                <div className={styles.discountsList}>
                    {couponsList && couponsList.map((discount, index) =>
                        <DiscountCard key={index} placeholder={discount.placeholder} image={discount.img} name={discount.name} description={discount.description} />
                    )}

                </div>
            </div>
        </div>
    </div >
}


export default CouponsPage