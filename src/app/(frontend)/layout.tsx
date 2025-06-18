import React from 'react'
import './../../styles/globals.css'
import Link from 'next/link'
import Navbar from './_components/Navbar'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Anna Zampatti',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main className="px-4">{children}</main>
      </body>
    </html>
  )
}
