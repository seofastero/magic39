import { Metadata } from "next/types";
import MastersPage from "@/pages/mastersPage";
import { mastersList } from "@/shared/Mocks/masters";
export const metadata: Metadata = {
    title: 'Мастера эротического массажа | MAGIC',
    description: 'Лучшие мастера своего дела не просто удовлетворят ваши ожидания, но и превзойдут их',
}
export default function Masters() {

    return (
        <MastersPage mastersList={mastersList} />
    )

}