import { Nunito } from 'next/font/google';
import './globals.css'
import type { Metadata } from 'next'
import NavBar from './components/navbar/NavBar'

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito(
  {subsets: ["latin"]}
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
