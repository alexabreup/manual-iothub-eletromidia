import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alexabreup.github.io/manual-iothub-eletromidia',
  integrations: [
    sitemap(),
    starlight({
      title: 'Manual IOTHUB - SMART RÉGUA',
      description: 'Guia de Utilização da Plataforma IOTHUB',
      logo: {
        src: './src/assets/logo.svg',
      },
      social: {
        github: 'https://github.com/alexabreup/manual-smartruler-v1',
      },
      sidebar: [
        {
          label: 'Guia de Operação',
          items: [
            { label: 'SMART RÉGUA', link: '/smart-regua-operacao/' }
          ],
        }
      ],
      customCss: [
        './src/styles/custom.css',
      ],
    }),
  ],
});