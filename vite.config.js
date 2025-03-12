import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: ["./node_modules/flyonui/dist/js/*.js"],
  plugins: [
    react(),
    tailwindcss()
  ],
})
