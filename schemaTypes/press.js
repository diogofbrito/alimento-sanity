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
      name: 'order',
      title: 'Ordem',
      type: 'number',
      description: 'Número de ordem. Ex: 10 = mais recente, 1 = mais antigo.',
      validation: (Rule) =>
        Rule.required().integer().positive().error('Insere um número inteiro maior que 0.'),
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

  orderings: [
    {
      title: 'Ordem (mais recente → mais antigo)',
      name: 'orderDesc',
      by: [{field: 'order', direction: 'desc'}],
    },
    {
      title: 'Ordem (mais antigo → mais recente)',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'placeholderImage',
      year: 'year',
      order: 'order',
    },
    prepare(selection) {
      const {title, media, year, order} = selection
      return {
        title,
        subtitle:
          year && order ? `${year} · ordem ${order}` : year ? `${year}` : 'Sem ano definido',
        media,
      }
    },
  },
}