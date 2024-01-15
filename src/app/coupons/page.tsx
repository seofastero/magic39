import { Footer } from "@/components/footer";
import Header from "@/components/header";
import CouponsPage from "@/pages/discountsPage";
import Layout from "@/shared/Layout";
import { discountsList } from "@/shared/Mocks/discounts";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Акции эротического массажного салона | MAGIC',
    description: 'Окунитесь в мир блаженства с нашими эксклюзивными акциями в массажном салоне',
}
async function discountsData() {
    return discountsList
}
export default async function Interior() {
    const discounts = await discountsData()
    if (!discounts) return <span>Что-то пошло не так</span>
    return (
        <Layout layoutHeaderSlot={<Header position={'sticky'} />} layoutFooterSlot={<Footer />} >
            <CouponsPage couponsList={discounts} />
        </Layout>
    )
}