import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages sirve el sitio en https://ornemeolans.github.io/portfolio/
  base: '/portfolio/',
})

