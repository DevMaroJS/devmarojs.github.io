import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  const config = {
    plugins: [react()],
    base: '/', // Default base URL
  }

  return config
})
