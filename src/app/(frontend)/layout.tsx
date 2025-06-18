import React from 'react'
import './../../styles/globals.css'
import Link from 'next/link'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Anna Zampatti',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Annazzz</Link>
          <Link href="illustrazioni">Illustrazioni</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
