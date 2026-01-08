export default {
  name: 'about',
  title: 'About Page',
  type: 'document',

  initialValue: {
    title: 'Sobre',
  },

  fields: [
    
    
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
