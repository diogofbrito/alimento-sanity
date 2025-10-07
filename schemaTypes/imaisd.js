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