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
      name: 'placeholderImage',
      title: 'Imagem Placeholder',
      type: 'image',
      options: {hotspot: true},
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