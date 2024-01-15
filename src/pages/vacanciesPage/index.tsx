import Image from 'next/image'
import styles from './styles.module.scss'
import { contactsList } from '@/shared/Mocks/contacts'

const VacanciesPage = () => {
    return <div className={styles.wrapper}>
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.vacancy_wrapper}>
                    <div className={styles.header}>
                        <span className={styles.title}>ВАКАНСИИ</span>
                        <span className={styles.subtitle}>В MAGIC SPA</span>
                    </div>
                    <div className={styles.vacancy_box}>
                        <Image quality={100} loading='eager' src={'/programs/2.jpeg'} height={1000} width={1000} alt={'Вакансии'} className={styles.vacancy_img} />
                        <div className={styles.about_us}>
                            <h1 className={styles.title}> Присоединяйтесь к нашей команде высококлассных массажистов в Magic39!
                            </h1>
                            <h2 className={styles.subtitle}>Мы ищем талантливых и увлеченных специалистов массажа, которые помогут нашим клиентам достигать гармонии тела и духа</h2>
                        </div>
                        <div className={styles.suggestions}>
                            <h4 className={styles.title}>Что мы предлагаем</h4>
                            <ul className={styles.list}>
                                <li><span className={styles.points}>Конкурентоспособную заработную плату и гибкий график.</span></li>
                                <li><span className={styles.points}>Постоянное обучение и развитие навыков.</span></li>
                                <li><span className={styles.points}>Приятную и поддерживающую рабочую атмосферу.</span></li>
                                <li><span className={styles.points}>Современное оборудование и комфортабельное рабочее место.</span></li>
                            </ul>
                        </div>
                        <div className={styles.suggestions}>
                            <h4 className={styles.title}>Требования к кандидатам</h4>
                            <ul className={styles.list}>
                                <li>
                                    <span className={styles.points}>Знание различных техник массажа</span>
                                </li>
                                <li>
                                    <span className={styles.points}>Отличные коммуникативные навыки и способность создавать расслабляющую атмосферу</span>
                                </li>
                                <li>
                                    <span className={styles.points}>Ответственный подход к работе и внимание к деталям</span>
                                </li>
                            </ul>

                        </div>


                        <div className={styles.contacts_wrapper}>
                            <h4 className={styles.title}>Как подать заявку:</h4>
                            <span className={styles.points}>Отправьте свое резюме и сопроводительное письмо на электронную почту <a href={`mailto:${contactsList.mail}`}>{contactsList.mail}</a> или позвоните нам по телефону {contactsList.optionalNumber} для записи на собеседование.</span>

                        </div>


                    </div>
                </div>
            </div>
        </div>

    </div >
}

export default VacanciesPage