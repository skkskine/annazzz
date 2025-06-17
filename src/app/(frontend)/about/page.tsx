import { getPayload } from 'payload'
import { RichText } from '@payloadcms/richtext-lexical/react'
import config from '@payload-config'

export default async function About() {
  const payload = await getPayload({ config })

  const { text } = await payload.findGlobal({
    slug: 'about',
  })

  return (
    <>
      <RichText data={text}></RichText>
    </>
  )
}
