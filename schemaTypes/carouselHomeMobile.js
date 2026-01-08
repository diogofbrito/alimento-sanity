export default {
  name: 'carouselHomeMobile',
  title: 'Carousel da Home (Mobile)',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Imagens do Carousel',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Imagem',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'alt',
              title: 'Descrição (ALT)',
              type: 'string',
              description: 'Descrição da imagem para acessibilidade (opcional)',
            },
          ],
          preview: {
            select: {
              media: 'image',
              title: 'alt',
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.required().min(2).max(10).error('O carousel deve ter entre 2 e 10 imagens.'),
      options: {
        layout: 'grid',
      },
    },
  ],

  preview: {
    select: {
      media: 'images.0.image',
    },
    prepare({media}) {
      return {
        title: 'Carousel da Home (Mobile)',
        subtitle: 'Gestão das imagens do slideshow',
        media,
      }
    },
  },
}
