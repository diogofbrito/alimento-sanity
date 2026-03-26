export default {
  name: 'imaisdPageSettings',
  title: 'I + D - Descrição',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título interno',
      type: 'string',
      initialValue: 'Página I + D',
      readOnly: true,
    },
    {
      name: 'introText',
      title: 'Texto descritivo',
      type: 'blockContent',
    },
    
  ],
  preview: {
    prepare() {
      return {
        title: 'Página I + D',
        subtitle: 'Conteúdo global da página',
      }
    },
  },
}
