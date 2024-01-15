import { Footer } from "@/components/footer";
import Header from "@/components/header";
import InteriorPage from "@/pages/interiorPage";
import Layout from "@/shared/Layout";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Интерьер эротического массажного салона | MAGIC',
    description: 'Откройте дверь в оазис релаксации и уюта c нашим массажным салоном',
}
export default async function Interior() {
    return (
        <Layout layoutHeaderSlot={<Header position={'sticky'} />} layoutFooterSlot={<Footer />} >
            <InteriorPage />
        </Layout>)
}