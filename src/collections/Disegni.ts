import { CollectionConfig } from 'payload'

export const Disegni: CollectionConfig = {
  slug: 'disegni',
  fields: [
    { name: 'name', type: 'text', label: 'Nome', required: true },
    { name: 'category', type: 'relationship', relationTo: 'categorie', label: 'Categoria' },
    { name: 'year', type: 'number', label: 'Anno', required: true },
    { name: 'richDesc', type: 'richText', label: 'Descrizione', required: true },
    {
      name: 'images',
      type: 'array',
      labels: {
        singular: {
          it: 'Immagine',
        },
        plural: {
          it: 'Immagini',
        },
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Immagine',
        },
      ],
    },
  ],
  admin: {
    useAsTitle: 'name',
  },
  labels: {
    singular: {
      it: 'Disegno',
    },
    plural: {
      it: 'Disegni',
    },
  },
}
