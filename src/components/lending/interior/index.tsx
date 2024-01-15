import Image from 'next/image'
import styles from './styles.module.scss'
import Link from 'next/link'

const InteriorPreview = () => {
    return (
        <div className={styles.interiorPreview}>
            <div className={styles.header}>
                <span className={styles.title}>
                    Интерьер
                </span>
                <div className={styles.divider} />

            </div>
            <div className={styles.interior}>
                <Image src={'/interrior/1.jpg'} quality={70} height={1300} width={1000} alt={'Интерьер'} className={styles.bgImg} />
                <Link href={'/interior'} className={styles.linkBtn}>Посмотреть интерьер</Link>
                <div className={styles.overlay} />
            </div>
        </div>
    )
}
export default InteriorPreview