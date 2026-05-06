import { defineConfig } from 'vite';
import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/central-de-ajuda/',
  plugins: [vue() as PluginOption],
});
