import { Inter, Poppins } from 'next/font/google'
import Header from './Header'
import Footer from './Footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Geeks for Geeks Student Chapter',
  description: 'Geeks for Geeks Student Chapter Website',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`flex flex-col min-h-screen ${inter.className}`}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

