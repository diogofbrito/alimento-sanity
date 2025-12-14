export default {
  name: 'projetos',
  title: 'Projetos Multisensoriais',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
      name: 'hoverPair',
      title: 'Imagens para Hover (2 imagens)',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (Rule) =>
        Rule.required().min(2).max(2).error('Deves escolher exatamente 2 imagens.'),
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'gallery',
      title: 'Galeria de Imagens',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'blockContent',
    },
  ],
  orderings: [
    {
      title: 'Ano (mais recente → mais antigo)',
      name: 'yearDesc',
      by: [{field: 'year', direction: 'desc'}],
    },
    {
      title: 'Ano (mais antigo → mais recente)',
      name: 'yearAsc',
      by: [{field: 'year', direction: 'asc'}],
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'hoverPair.0',
      year: 'year',
    },
    prepare({title, media, year}) {
      return {
        title,
        subtitle: year ? `${year}` : 'Sem ano definido',
        media,
      }
    },
  },
}