import { IProgram } from '@/shared/types/commoin.interface'
import styles from './styles.module.scss'
import { Footer } from '@/components/footer'
import Header from '@/components/header'
import { Svg } from '@/shared/ui/Svg'
import Image from 'next/image'
import Layout from '@/shared/Layout'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(styles)
interface IProgramPage {
    programsList: IProgram[]
}
const ProgramsPage = ({ programsList }: IProgramPage) => {
    return (
        <Layout layoutHeaderSlot={<Header position={'sticky'} />} layoutFooterSlot={<Footer />} >
            <div className={styles.wrapper} >
                <main className={styles.main}>
                    <div className={styles.programs_wrapper}>
                        <div className={styles.header}>
                            <span className={styles.title}>ПРОГРАММЫ</span>
                            <span className={styles.subtitle}>массажа</span>
                        </div>
                        <div className={styles.programs_list}>
                            {programsList && programsList.map((program, index) =>
                                <div key={index}>
                                    <div className={cx(['left'])} >
                                        <div className={styles.image}>
                                            <Image src={program ? program.img : ''} height={1000} width={1000} alt={program.name} />
                                        </div>

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
                                            {program.description &&
                                                <span className={styles.desc}>{program.description}</span>
                                            }
                                            <div className={styles.program_list}>
                                                <span className={styles.program_title}>Программа:</span>
                                                <ul>
                                                    {program.actions.map((action, index) =>
                                                        <li key={index}><div className={styles.point} /> {action.name}</li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default ProgramsPage