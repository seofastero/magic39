import type { Metadata } from 'next'
import './globals.css'
import WarningPopUp from '@/components/warning'



export const metadata: Metadata = {
  title: 'Эротический массаж в Калининграде | MAGIC',
  description: 'В MAGIC SPA мы стремимся не просто снимать физические напряжения, но и создавать гармонию внутри вас, даря вам ощущение полного благополучия и внутреннего равновесия. Доверьтесь нашим опытным специалистам, и вы почувствуете, как ваше тело преображается под искусными руками заботливых профессионалов MAGIC SPA. Добро пожаловать в мир умиротворения и восстановления, где каждый момент становится частью вашего собственного спа-путешествия.',
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ru">
      <head>
        <meta name="google-site-verification" content="8ZtV7PQc29VyU_61Ld8d-VicyLyXburVzlAAc_zYMK0" />
      </head>
      <body>
        {children}
      </body>
      <WarningPopUp />
    </html>
  )
}
