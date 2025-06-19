import { getPayload } from 'payload'
import { RichText } from '@payloadcms/richtext-lexical/react'
import config from '@payload-config'
import Image from 'next/image'

export default async function About() {
  const payload = await getPayload({ config })

  const { text, image } = await payload.findGlobal({
    slug: 'about',
  })

  return (
    <div className="grid grid-cols-2">
      <RichText data={text} className="pr-3 h-full"></RichText>
      {typeof image === 'object' && (
        <Image src={image.url!} alt={image.alt} fill className="relative!"></Image>
      )}
    </div>
  )
}
