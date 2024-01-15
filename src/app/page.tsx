import PresentPreview from '@/components/lending/welcome'
import styles from './page.module.scss'
import DiscountPreview from '@/components/lending/discount'
import MastersPreview from '@/components/lending/masters'
import ProgramsPreview from '@/components/lending/programs'
import InteriorPreview from '@/components/lending/interior'
import { discountsList } from '@/shared/Mocks/discounts'
import { mastersList } from '@/shared/Mocks/masters'
import { programsList } from '@/shared/Mocks/programs'
import Layout from '@/shared/Layout'
import { Footer } from '@/components/footer'
import Header from '@/components/header'
import HomePage from '@/pages/homePage'


export default function Home() {
  return (
    <HomePage />
  )
}
