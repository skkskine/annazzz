import { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  fields: [
    { name: 'text', type: 'richText', required: true, label: 'Testo' },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Immagine',
    },
  ],
}
