'use client'

import { Media } from '@/payload-types'
import Image from 'next/image'

type Props = {
  images:
    | {
        image: number | Media
        id?: string | null
      }[]
    | null
    | undefined
}

export function ImageDisplay({ images }: Props) {
  console.log(images)
  const imageList = images?.map((image) => {
    if (image && typeof image.image === 'object') {
      return (
        <div key={image.id} className="w-[50%]">
          <Image src={image.image.url!} alt={image.image.alt} fill className="relative!"></Image>
        </div>
      )
    }
  })
  return <>{imageList}</>
}
