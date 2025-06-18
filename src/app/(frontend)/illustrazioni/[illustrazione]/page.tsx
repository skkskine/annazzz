import { getPayload } from 'payload'
import config from '@payload-config'
import RouteError from '../../_components/RouteError'
import { RichText } from '@payloadcms/richtext-lexical/react'

export default async function Illustrazione({
  params,
}: {
  params: Promise<{ illustrazione: string }>
}) {
  const { illustrazione } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'disegni',
    where: {
      slug: {
        equals: illustrazione,
      },
    },
  })

  const disegno = docs[0]

  if (!disegno) {
    return <RouteError></RouteError>
  }

  return (
    <>
      <h1>{disegno.name}</h1>
      <RichText data={disegno.richDesc}></RichText>
      <p>{disegno.year}</p>
    </>
  )
}
