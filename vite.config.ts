import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Plugin to handle figma:asset imports
function figmaAssetPlugin() {
  return {
    name: 'figma-asset-plugin',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        // Extract the hash from the figma URL
        const hash = id.replace('figma:asset/', '')
        // Map to the assets folder
        return path.resolve(__dirname, `assets/${hash}`)
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), figmaAssetPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: true,
  },
})
