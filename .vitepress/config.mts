import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'es',
  title: 'Kli',
  description: 'Una vasija que hace posible recibir, transformar y poner en circulación. Las relaciones transforman aquello que conectan.',
  titleTemplate: 'Kli',
  srcDir: 'content',
  cleanUrls: true,
  lastUpdated: false,

  head: [
    ['meta', { name: 'description', content: 'Kli, una vasija. Las relaciones transforman aquello que conectan. Una biblioteca pública de dos libros sobre el conocimiento como sistema vivo y el producto.' }],
    ['meta', { property: 'og:site_name', content: 'Kli' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'es' }],
    ['meta', { property: 'og:title', content: 'Kli' }],
    ['meta', { property: 'og:description', content: 'Una vasija que hace posible recibir, transformar y poner en circulación. Las relaciones transforman aquello que conectan.' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
  ],

  themeConfig: {
    docFooter: {
      prev: '← Anterior',
      next: 'Siguiente →',
    },

    outline: {
      label: 'En esta página',
    },

    nav: [
      { text: 'Libro I', link: '/book-01-the-philosophy/' },
      { text: 'Libro II', link: '/book-02-the-product/' },
    ],

    sidebar: [
      {
text: 'Libro I · El conocimiento como sistema vivo',
        collapsed: false,
        items: [
          {
            text: 'Apertura',
            collapsed: false,
            items: [
              { text: 'Prólogo', link: '/book-01-the-philosophy/chapters/00-prologue' },
              { text: 'Por qué otro producto', link: '/book-01-the-philosophy/chapters/01-why-another-product' },
              { text: 'Relación antes que aprendizaje', link: '/book-01-the-philosophy/chapters/02-relacion-antes-que-aprendizaje' },
            ],
          },
          {
            text: 'Personas',
            collapsed: false,
            items: [
              { text: 'La persona', link: '/book-01-the-philosophy/chapters/03-people/00-introduction' },
              { text: 'Aprender', link: '/book-01-the-philosophy/chapters/03-people/01-learning' },
              { text: 'Enseñar', link: '/book-01-the-philosophy/chapters/03-people/02-teaching' },
              { text: 'Variabilidad', link: '/book-01-the-philosophy/chapters/03-people/03-diversity' },
              { text: 'Empatía', link: '/book-01-the-philosophy/chapters/03-people/04-empathy' },
              { text: 'Curiosidad', link: '/book-01-the-philosophy/chapters/03-people/05-curiosity' },
            ],
          },
          {
            text: 'Relaciones',
            collapsed: false,
            items: [
              { text: 'Las relaciones', link: '/book-01-the-philosophy/chapters/04-relationships/00-introduction' },
              { text: 'Comunidad', link: '/book-01-the-philosophy/chapters/04-relationships/01-community' },
              { text: 'Diálogo', link: '/book-01-the-philosophy/chapters/04-relationships/02-dialogue' },
              { text: 'Confianza', link: '/book-01-the-philosophy/chapters/04-relationships/03-trust' },
              { text: 'Emergencia', link: '/book-01-the-philosophy/chapters/04-relationships/04-emergence' },
              { text: 'Pertenencia', link: '/book-01-the-philosophy/chapters/04-relationships/05-belonging' },
            ],
          },
          {
            text: 'Sistemas vivos',
            collapsed: false,
            items: [
              { text: 'Los sistemas vivos', link: '/book-01-the-philosophy/chapters/05-living-systems/00-introduction' },
              { text: 'Bosque', link: '/book-01-the-philosophy/chapters/05-living-systems/01-forest' },
              { text: 'Micelio', link: '/book-01-the-philosophy/chapters/05-living-systems/02-mycelium' },
              { text: 'Fractales', link: '/book-01-the-philosophy/chapters/05-living-systems/03-fractals' },
              { text: 'Espirales', link: '/book-01-the-philosophy/chapters/05-living-systems/04-spirals' },
              { text: 'Filotaxia', link: '/book-01-the-philosophy/chapters/05-living-systems/05-phyllotaxis' },
              { text: 'Complejidad', link: '/book-01-the-philosophy/chapters/05-living-systems/06-complexity' },
            ],
          },
          {
            text: 'Producto',
            collapsed: false,
            items: [
              { text: 'El producto', link: '/book-01-the-philosophy/chapters/06-product/00-introduction' },
              { text: 'Lo que construimos', link: '/book-01-the-philosophy/chapters/06-product/01-what-we-build' },
              { text: 'Lo que no construimos', link: '/book-01-the-philosophy/chapters/06-product/02-what-we-dont-build' },
              { text: 'Cómo decidimos', link: '/book-01-the-philosophy/chapters/06-product/03-how-we-decide' },
            ],
          },
{
          text: 'Cierre',
          collapsed: false,
          items: [
            { text: 'Epílogo', link: '/book-01-the-philosophy/chapters/99-epilogue' },
          ],
        },
        {
          text: 'El libro',
          collapsed: false,
          items: [
            { text: 'Libro I · El conocimiento como sistema vivo', link: '/book-01-the-philosophy/' },
            { text: 'DNA', link: '/book-01-the-philosophy/DNA' },
            { text: 'Principios inmutables', link: '/book-01-the-philosophy/PRINCIPLES' },
            { text: 'Glosario', link: '/book-01-the-philosophy/GLOSSARY' },
            { text: 'Preguntas fundacionales', link: '/book-01-the-philosophy/QUESTIONS' },
            { text: 'Referencias', link: '/book-01-the-philosophy/REFERENCES' },
            { text: 'Cronología', link: '/book-01-the-philosophy/TIMELINE' },
          ],
        },
      ],
    },
      {
text: 'Libro II · El producto',
        collapsed: false,
        items: [
          {
            text: 'Capítulos',
            collapsed: false,
            items: [
              { text: 'El lugar', link: '/book-02-the-product/chapters/00-prologue' },
              { text: 'Kli', link: '/book-02-the-product/chapters/01-naming' },
              { text: 'Propiciar', link: '/book-02-the-product/chapters/02-the-verb' },
              { text: 'Hábitat', link: '/book-02-the-product/chapters/03-habitat' },
              { text: 'El jardinero', link: '/book-02-the-product/chapters/04-gardener' },
              { text: 'Circulación', link: '/book-02-the-product/chapters/05-circulation' },
              { text: 'Catalizador', link: '/book-02-the-product/chapters/06-catalyst' },
              { text: 'Despertar', link: '/book-02-the-product/chapters/07-awakening' },
              { text: 'Lenguaje visual', link: '/book-02-the-product/chapters/08-visual-language' },
              { text: 'Ecosistema', link: '/book-02-the-product/chapters/09-ecosystem' },
              { text: 'Lo que Kli no es', link: '/book-02-the-product/chapters/10-what-kli-is-not' },
              { text: 'El momento antes del bosque', link: '/book-02-the-product/chapters/99-epilogue' },
            ],
          },
          {
            text: 'El libro',
            collapsed: false,
            items: [
              { text: 'Libro II · El producto', link: '/book-02-the-product/' },
              { text: 'DNA-II', link: '/book-02-the-product/DNA-II' },
              { text: 'Principios del producto', link: '/book-02-the-product/PRINCIPLES-II' },
              { text: 'Glosario del Libro II', link: '/book-02-the-product/GLOSSARY-II' },
              { text: 'Referencias del Libro II', link: '/book-02-the-product/REFERENCES-II' },
              { text: 'Cronología del Libro II', link: '/book-02-the-product/TIMELINE-II' },
            ],
          },
        ],
      },
    ],
  },
})