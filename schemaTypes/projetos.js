export default {
  name: 'projetos',
  title: 'Projetos Multisensoriais',
  type: 'document',
  groups: [
    {
      name: 'principal',
      title: 'Secção 1 · Principal',
    },
    {
      name: 'infosDestaque',
      title: 'Secção 2 · Infos com mais destaque',
    },
    {
      name: 'infosSecundarias',
      title: 'Secção 3 · Infos secundárias',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      group: 'principal',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'principal',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Galeria de Imagens',
      type: 'array',
      group: 'principal',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'hoverPair',
      title: 'Imagens para Hover (2 imagens)',
      type: 'array',
      group: 'principal',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (Rule) =>
        Rule.required().min(2).max(2).error('Deves escolher exatamente 2 imagens.'),
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'blockContent',
      group: 'principal',
    },
    {
      name: 'data',
      title: 'Data',
      description: 'Ex: 25 Janeiro a 22 Fevereiro',
      type: 'string',
      group: 'infosDestaque',
    },
    {
      name: 'year',
      title: 'Ano',
      type: 'number',
      group: 'infosDestaque',
      validation: (Rule) =>
        Rule.required()
          .min(1900)
          .max(new Date().getFullYear() + 1)
          .error('Por favor insere um ano válido.'),
    },

    {
      name: 'tipo',
      title: 'Tipo de Projeto (Por ex: "Almoço para 4pax", "Instalação Artistica", etc)',
      type: 'string',
      group: 'infosDestaque',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'local',
      title: 'Local',
      description:
        'Local (Se for uma Exposição/Instalação, colocar o nome da galeria, ex: "Galeria Monumental, Lisboa")',
      type: 'string',
      group: 'infosDestaque',
    },
    {
      name: 'creditos',
      title: 'Créditos',
      description: 'Créditos das fotografias do projeto',
      type: 'string',
      group: 'infosDestaque',
    },
    {
      name: 'cliente',
      title: 'Cliente (Nome do cliente, se existir)',
      type: 'string',
      group: 'infosDestaque',
    },
    {
      name: 'fichaTecnica',
      title: 'Ficha técnica',
      type: 'array',
      group: 'infosSecundarias',
      of: [
        {
          type: 'object',
          name: 'fichaTecnicaItem',
          title: 'Item da ficha técnica',
          fields: [
            {
              name: 'titulo',
              title: 'Título',
              type: 'string',
              description: 'Ex: Produção, Curadoria, Fotografia',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'conteudo',
              title: 'Conteúdo',
              type: 'text',
              rows: 3,
              description: 'Ex: Maria Amélia',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'titulo',
              subtitle: 'conteudo',
            },
          },
        },
      ],
    },

    {
      name: 'links',
      title: 'Links e ficheiros',
      type: 'object',
      group: 'infosSecundarias',
      fields: [
        {
          name: 'pdfs',
          title: 'PDFs',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'pdfItem',
              title: 'PDF',
              fields: [
                {
                  name: 'title',
                  title: 'Título do PDF',
                  description:
                    'Sempre que for um PDF, o título deverá começar com "PDF", ex: "PDF - Folha de sala da exposição"',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'file',
                  title: 'Ficheiro PDF',
                  type: 'file',
                  options: {accept: 'application/pdf'},
                  validation: (Rule) => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  media: 'file',
                },
                prepare({title, media}) {
                  return {
                    title: title || 'PDF sem título',
                    subtitle: 'Documento PDF',
                    media,
                  }
                },
              },
            },
          ],
        },
        {
          name: 'urls',
          title: 'Links URL',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'urlItem',
              title: 'Link',
              fields: [
                {
                  name: 'title',
                  title: 'Título',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                  validation: (Rule) => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'url',
                },
              },
            },
          ],
        },
      ],
    },

    {
      name: 'agradecimentos',
      title: 'Agradecimentos',
      description: 'Adicionar nomes para os agradecimentos separados com vírgulas',
      type: 'string',
      group: 'infosSecundarias',
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
