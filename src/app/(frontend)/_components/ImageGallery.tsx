'use client'
import { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import GridLayout from './GridLayout'

type Props = {
  numberOfColumns: number
  section: string
  slugs: string[]
  images:
    | {
        image: number | Media
        id?: string | null
      }[]
    | null
    | undefined
}

export default function ImageGallery({ images, numberOfColumns, section, slugs }: Props) {
  const imageList = images?.map((image, idx) => {
    if (image && typeof image.image === 'object') {
      return (
        <div key={image.id} className="hover:rotate-2 transition-transform">
          <Link href={`${section}/${slugs[idx]}`}>
            <Image
              src={image.image.url!}
              alt={image.image.alt}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              priority={true}
              width={50}
              height={50}
            ></Image>
          </Link>
        </div>
      )
    }
  })
  return <GridLayout numberOfColumns={numberOfColumns}>{imageList}</GridLayout>
}
