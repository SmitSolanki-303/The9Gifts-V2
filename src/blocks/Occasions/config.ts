import type { Block } from 'payload'

export const Occasions: Block = {
  slug: 'occasions',
  interfaceName: 'OccasionsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Shop by Occasion',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Curated gifts for every celebration',
    },
  ],
}
