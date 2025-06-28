import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173, // ✅ LOCK port to match backend CORS whitelist
    strictPort: true // ❌ Error if port is busy, to avoid accidental port change
  }
})
