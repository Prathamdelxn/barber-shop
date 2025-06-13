'use client'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export default function CustomerLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="min-h-screen flex flex-col">
       
          <main className="flex-1">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  )
}