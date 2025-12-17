export default {
  name: 'press',
  title: 'Press',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'year',
      title: 'Ano',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .min(1900)
          .max(new Date().getFullYear() + 1)
          .error('Por favor insere um ano válido.'),
    },

    {
      name: 'placeholderImage',
      title: 'Imagem Placeholder',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).required(),
    },
    {
      name: 'pdf',
      title: 'PDF da publicação',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'placeholderImage',
      year: 'year',
    },
    prepare(selection) {
      const {title, media, year} = selection
      return {
        title: title,
        subtitle: year ? ` ${year}` : 'Sem ano definido',
        media: media,
      }
    },
  },
}
