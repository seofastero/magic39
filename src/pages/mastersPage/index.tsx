import styles from './styles.module.scss'
import PersonCard from "@/components/personCard";
import Layout from "@/shared/Layout";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { IMaster } from '@/shared/types/commoin.interface';
import { FC } from 'react';
interface IMastersPage {
    mastersList: IMaster[]
}
const MastersPage: FC<IMastersPage> = ({ mastersList }) => {
    return (
        <Layout layoutHeaderSlot={<Header position={'sticky'} />} layoutFooterSlot={<Footer />} >
            <div className={styles.wrapper}>
                <div className={styles.main}>
                    <div className={styles.mastersWrapper}>
                        <div className={styles.header}>
                            <span className={styles.title}>МАСТЕРА</span>
                            <span className={styles.subtitle}>MAGIC</span>
                        </div>
                        <div className={styles.mastersList}>
                            {mastersList?.map((person, index) =>
                                <PersonCard person={person} key={index} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default MastersPage