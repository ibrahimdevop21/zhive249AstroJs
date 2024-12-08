import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'static', // Ensure static output
  base: '/', // Update base if deploying to a subfolder
  integrations: [tailwind()],
  adapter: vercel(),
});
