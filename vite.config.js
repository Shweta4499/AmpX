import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // eslint-disable-next-line no-undef
  base:process.env.VITE_BASE_PATH ||"/AmpX",
});
