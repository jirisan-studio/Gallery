import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // 👈 여기가 중요합니다!

export default defineConfig({
  integrations: [tailwind()],
});