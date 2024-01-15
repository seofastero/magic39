import { Metadata } from "next/types";
import { programsList } from "@/shared/Mocks/programs";
import ProgramsPage from '@/pages/programsPage';

export const metadata: Metadata = {
    title: 'Программы эротического массажа | MAGIC',
    description: 'Программы эротического массажа для исполнения твоих фантазий и желаний',
}

async function getData() {
    return programsList
}
export default async function Programs() {
    const programsList = await getData()
    return (
        <ProgramsPage programsList={programsList} />
    )

}