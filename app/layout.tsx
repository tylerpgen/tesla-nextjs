import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Tesla Detective',
  description: "Find the nearest Tesla in stock near you!"
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer />
        </body>
    </html>
  )
}
