import type { Metadata } from 'next'
import styles from './notfound.module.scss'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Эротический массаж в Калининграде | MAGIC',
  description: 'В MAGIC SPA мы стремимся не просто снимать физические напряжения, но и создавать гармонию внутри вас, даря вам ощущение полного благополучия и внутреннего равновесия. Доверьтесь нашим опытным специалистам, и вы почувствуете, как ваше тело преображается под искусными руками заботливых профессионалов MAGIC SPA. Добро пожаловать в мир умиротворения и восстановления, где каждый момент становится частью вашего собственного спа-путешествия.',
}

export default function NotFound() {

  return (
    <div className={styles.notfound}>
      <div className={styles.box}>
        <span>Упс... Что-то пошло не так</span>
        <Link href={'/'} className={styles.backBtn}>Вернуться на главную</Link>
      </div>
    </div>
  )
}
