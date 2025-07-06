import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/', // Default base URL
  }

  if (command !== 'serve') {
    // Set base URL for build (e.g., GitHub Pages)
    config.base = '/personal-portfolio/' // Replace with your repository name
  }

  return config
})
