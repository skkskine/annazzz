import React from 'react'
import './styles.css'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function HomePage() {
  const payload = await getPayload({ config })

  const doc = await payload.findByID({
    collection: 'categories',
    id: '1',
  })

  return <>{doc.name}</>
}
