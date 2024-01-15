import { Footer } from "@/components/footer";
import Header from "@/components/header";
import VacanciesPage from "@/pages/vacanciesPage";
import Layout from "@/shared/Layout";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Вакансии в массажном салоне | MAGIC',
    description: 'Присоединяйтесь к нашей команде высококлассных массажистов в Magic39',
}
export default async function Vacancies() {
    return (
        <Layout layoutHeaderSlot={<Header position={'sticky'} />} layoutFooterSlot={<Footer />} >
            <VacanciesPage />
        </Layout>)
}