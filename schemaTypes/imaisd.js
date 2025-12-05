export default {
  name: 'imaisd',
  title: 'I + D',
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
    {
      name: 'ingredients',
      title: 'Ingredientes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'quantity', title: 'Quantidade', type: 'string'},
            {name: 'item', title: 'Ingrediente', type: 'string'},
            {name: 'note', title: 'Nota (opcional)', type: 'string'},
          ],
        },
      ],
    },
    {
      name: 'preparation',
      title: 'Preparação',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'stepNumber', title: 'Passo', type: 'number'},
            {name: 'instruction', title: 'Instrução', type: 'text'},
          ],
        },
      ],
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