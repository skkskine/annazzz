import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  fields: [{ name: 'name', type: 'text', unique: true, required: true, label: 'Nome' }],
  admin: {
    useAsTitle: 'name',
  },
}
