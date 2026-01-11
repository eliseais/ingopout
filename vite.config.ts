import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Plugin to handle figma:asset imports
function figmaAssetPlugin() {
  return {
    name: 'vite-plugin-figma-asset',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const assetPath = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'assets', assetPath)
      }
      return null
    }
  }
}

// Plugin to handle versioned imports (e.g., package@1.2.3)
function versionedImportsPlugin() {
  return {
    name: 'vite-plugin-versioned-imports',
    resolveId(id: string) {
      // Match pattern like @radix-ui/react-accordion@1.2.3 or lucide-react@0.487.0
      const versionMatch = id.match(/^(.+)@[\d.]+$/)
      if (versionMatch) {
        return versionMatch[1] // Return package name without version
      }
      return null
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    figmaAssetPlugin(),
    versionedImportsPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  }
})
