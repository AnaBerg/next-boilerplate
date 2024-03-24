import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/docs/**/*.{js,ts,jsx,tsx,mdx}',
    './src/test/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
