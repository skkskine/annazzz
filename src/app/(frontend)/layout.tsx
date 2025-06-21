import React from 'react'
import './../../styles/globals.css'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'
import { getPayload } from 'payload'
import config from '@payload-config'
import ComingSoon from './_components/ComingSoon'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Anna Zampatti',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const payload = await getPayload({ config })
  const { comingSoon } = await payload.findGlobal({
    slug: 'coming-soon',
  })

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between">
        {comingSoon ? (
          <ComingSoon></ComingSoon>
        ) : (
          <>
            <Navbar></Navbar>
            <main className="flex-1 px-4">{children}</main>
            <Footer></Footer>
          </>
        )}
      </body>
    </html>
  )
}
