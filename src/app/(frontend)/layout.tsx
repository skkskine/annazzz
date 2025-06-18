import React from 'react'
import './../../styles/globals.css'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Anna Zampatti',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between">
        <Navbar></Navbar>
        <main className="flex-1 px-4">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  )
}
