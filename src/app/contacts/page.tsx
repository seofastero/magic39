import { Footer } from "@/components/footer";
import Header from "@/components/header";
import ContactsPage from "@/pages/contactsPage";
import Layout from "@/shared/Layout";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Контакты эротического массажного салона | MAGIC',
    description: 'Свяжитесь с нами и откройте двери в мир невероятного ухода и расслабления. Наша дружелюбная команда с удовольствием ответит на ваши вопросы и поможет вам запланировать ваш идеальный опыт в нашем массажном салоне.',
}
export default async function Contacts() {
    return (
        <Layout layoutHeaderSlot={<Header position={'sticky'} />} layoutFooterSlot={<Footer />} >
            <ContactsPage />
        </Layout>
    )
}