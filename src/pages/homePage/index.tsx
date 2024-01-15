import { Footer } from "@/components/footer"
import Header from "@/components/header"
import DiscountPreview from "@/components/lending/discount"
import InteriorPreview from "@/components/lending/interior"
import MastersPreview from "@/components/lending/masters"
import ProgramsPreview from "@/components/lending/programs"
import { discountsList } from "@/shared/Mocks/discounts"
import { mastersList } from "@/shared/Mocks/masters"
import { programsList } from "@/shared/Mocks/programs"
import styles from './styles.module.scss'
import Layout from "@/shared/Layout"
import WelcomePreview from "@/components/lending/welcome"
const HomePage = () => {
    return (
        <Layout
            layoutHeaderSlot={<Header position={'fixed'} />}
            layoutFooterSlot={<Footer />}
        >
            <main className={styles.main}>
                <div className={styles.lending}>
                    <section id='home' className={styles.welcomeSection}>
                        <WelcomePreview />
                    </section>
                    <section id='masters' className={styles.mastersSection}>
                        <MastersPreview mastersList={mastersList} />
                    </section>
                    <section id='programs'>
                        <ProgramsPreview programsList={programsList} />
                    </section>
                    <section id='discounts'>
                        <DiscountPreview discountsList={discountsList} />
                    </section>
                    <section id='interior'>
                        <InteriorPreview />
                    </section>

                </div>
            </main>
        </Layout>
    )
}
export default HomePage