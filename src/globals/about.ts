import { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  fields: [{ name: 'text', type: 'richText', required: true }],
}
