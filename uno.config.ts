import {
  defineConfig,
  presetUno,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      accent: {
        DEFAULT: '#c41e3a',
        light: '#e85d75',
        dark: '#8b4513',
      },
    },
    fontFamily: {
      serif: ['Source Han Serif SC', 'Noto Serif SC', 'serif'],
      kai: ['LXGW WenKai', 'Source Han Serif SC', 'serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  shortcuts: {
    'text-headline': 'font-serif font-bold',
    'text-body': 'font-kai leading-relaxed tracking-wide',
  },
});
