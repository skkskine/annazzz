import { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import GridLayout from './GridLayout'

type Props = {
  numberOfColumns: number
  section: string
  images:
    | {
        image: number | Media
        id?: string | null
      }[]
    | null
    | undefined
}

export default async function ImageGallery({ images, numberOfColumns, section }: Props) {
  const imageList = images?.map((image) => {
    if (image && typeof image.image === 'object') {
      console.log(image)
      return (
        <div key={image.id}>
          <Link href={`${section}/${image.id}`}>
            <Image
              src={image.image.url!}
              alt={image.image.alt}
              layout="fill"
              className="relative!"
            ></Image>
          </Link>
        </div>
      )
    }
  })
  return <GridLayout numberOfColumns={numberOfColumns}>{imageList}</GridLayout>
}
