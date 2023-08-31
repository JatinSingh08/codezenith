import Body from '@/components/Body/Body'
import Header from '@/components/Header/Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
      <Body />
    </main>
  )
}
