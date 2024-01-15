import Image from 'next/image'
import styles from './styles.module.scss'
import cnBind from 'classnames/bind'
const cx = cnBind.bind(styles)

export const Loader = () => {

    return (
        <div className={cx([`loader`])}>
            <Image priority={true} quality={50} src={'/logo.png'} alt='Magic logo' className={styles.logo} width={100} height={100} />
        </div>
    )
}