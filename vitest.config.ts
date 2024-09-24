import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    testTransformMode: {
      web: ['ts'] // Use TypeScript in web environment transformation
    }
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src') // Resolve "~" to "src" directory
    },
    extensions: ['.ts', '.js'] // Ensure Vitest resolves .ts and .js files
  }
})
