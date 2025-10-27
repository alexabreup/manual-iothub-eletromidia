import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://your-site-name.netlify.app',
  integrations: [
    starlight({
      title: 'Manual IOTHUB - SMART RÉGUA',
      description: 'Guia de Utilização da Plataforma IOTHUB',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Português',
          lang: 'pt-BR',
        },
      },
      logo: {
        src: './src/assets/logo.svg',
      },
      sidebar: [
        {
          label: 'Documentação',
          items: [
            { label: 'Início', link: '/' },
          ],
        },
        {
          label: 'Guia de Operação',
          items: [
            { label: 'SMART RÉGUA', link: '/smart-regua-operacao/' }
          ],
        },
        {
          label: 'Suporte',
          items: [
            { label: 'Contato', link: '/contato/' }
          ],
        }
      ],
      customCss: [
        './src/styles/custom.css',
      ],
      components: {
        Head: './src/components/ForceLightTheme.astro',
      },
      disable404Route: false,
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
  ],
});