export default {
  name: 'imaisd',
  title: 'I + D',
  type: 'document',
  fields: [
    {name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required()},
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    },
    {name: 'year', title: 'Ano', type: 'number'},
    {
      name: 'coverImage',
      title: 'Imagem de capa da publicação',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'coverImage2',
      title: 'Imagem conteudo da publicação (2) - hover',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'pdf',
      title: 'PDF da publicação',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    },

    {
      name: 'gallery',
      title: 'Galeria (imagem + ingredientes)',
      type: 'array',
      of: [
        {
          name: 'galleryItem',
          title: 'Item',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Imagem',
              type: 'image',
              options: {hotspot: true},
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Título desta imagem',
              type: 'blockContent',
            },
          ],
          preview: {
            select: {media: 'image', title: 'title'},
            prepare({media, title}) {
              const text = Array.isArray(title)
                ? title
                    .filter((b) => b?._type === 'block')
                    .map((b) => (b.children || []).map((ch) => ch.text).join(''))
                    .join(' ')
                    .trim()
                : ''

              return {media, title: text || 'Imagem'}
            },
          },
        },
      ],
      options: {layout: 'grid'},
    },

    {name: 'description', title: 'Descrição', type: 'blockContent'},
  ],

  preview: {
    select: {title: 'title', media: 'gallery.0.image', year: 'year'},
    prepare({title, media, year}) {
      return {title, subtitle: year ? `${year}` : 'Sem ano definido', media}
    },
  },
}
