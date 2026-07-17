import type { Block } from 'payload'

export const PromoSlider: Block = {
  slug: 'promoSlider',
  interfaceName: 'PromoSliderBlock',
  fields: [
    {
      name: 'banners',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
          label: 'Redirect URL (e.g. /shop?category=birthday)',
        },
      ],
    },
  ],
}
