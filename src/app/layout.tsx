import { Sidebar } from '@/components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Car Marketplace',
  description: 'Car Marketplace, generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='md:flex'>
          <nav className='bg-dark md:bg-secondary sticky top-0 w-[100%] h-[10vh] md:w-[8%] md:h-[100vh] z-50'>
            <Sidebar />
          </nav>
          {children}
        </div>
      </body>
    </html>
  )
}
