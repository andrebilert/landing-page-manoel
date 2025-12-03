import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/landing-page-manoel/', // 👈 nome exato do repositório
  build: {
    outDir: 'docs',              // 👈 Vite vai gerar o build direto na pasta docs
  },
})