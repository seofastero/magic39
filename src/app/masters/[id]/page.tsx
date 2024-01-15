import { Footer } from "@/components/footer";
import Header from "@/components/header";
import MasterPage from "@/pages/masterPage";
import Layout from "@/shared/Layout";
import { mastersList } from "@/shared/Mocks/masters";
import { IMaster } from "@/shared/types/commoin.interface";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { Metadata } from "next/types";

async function getData({ params }: Params) {
    const masterData = mastersList.find((master) => master.id === Number(params.id))
    const mastersLength = mastersList.length
    const getRandomUniqueNumbers = (count: number, max: number) => {
        if (count > max + 1) {
            return [];
        }
        const uniqueNumbers = new Set();
        while (uniqueNumbers.size < count) {
            const randomNumber = Math.floor(Math.random() * (max + 1)) + 1;
            uniqueNumbers.add(randomNumber);
        }
        return Array.from(uniqueNumbers);
    };
    const randomIds = getRandomUniqueNumbers(5, mastersLength - 1);
    const randomMasters = randomIds.map(id => mastersList.find(product => product.id === id));
    return { masterData, randomMasters, mastersLength }
}

export const metadata: Metadata = {
    title: 'Мастера эротического массажа | MAGIC',
    description: 'Лучшие мастера своего дела не просто удовлетворят ваши ожидания, но и превзойдут их',
}
export default async function Master(context: any) {
    const data = await getData(context)
    if (!data) return <span>Not found</span>
    return (
        <Layout layoutHeaderSlot={<Header position={'sticky'} />} layoutFooterSlot={<Footer />} >
            <MasterPage
                masterData={data.masterData as IMaster}
                randomMasters={data.randomMasters as IMaster[]}
                mastersLength={data.mastersLength as number}
            />
        </Layout>
    )

}