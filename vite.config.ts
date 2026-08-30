import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

function githubPagesBase() {
  if (process.env.GITHUB_ACTIONS !== 'true') return '/'

  const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
  return repositoryName && !repositoryName.endsWith('.github.io')
    ? `/${repositoryName}/`
    : '/'
}

// https://vite.dev/config/
export default defineConfig({
  base: githubPagesBase(),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
