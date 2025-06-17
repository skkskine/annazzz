import { getPayload } from 'payload'
import config from '@payload-config'
import ImageGallery from '../_components/ImageGallery'

export default async function Illustrazioni() {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'disegni',
  })

  const images = docs.map((doc) => {
    return doc.images![0]
  })

  return (
    <>
      <ImageGallery section="illustrazioni" images={images} numberOfColumns={4}></ImageGallery>
    </>
  )
}
