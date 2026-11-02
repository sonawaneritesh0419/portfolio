// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import path from 'path'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// })



import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// Local development only: serves POST /api/chat from api/chat.js so that a plain
// `npm run dev` is enough. In production Vercel runs api/chat.js as a serverless function.
function localApi() {
  return {
    name: 'local-api',
    apply: 'serve',
    config(_, { mode }) {
      // Load .env / .env.local (all keys, not only VITE_*) into process.env for api/chat.js
      const env = loadEnv(mode, process.cwd(), '')
      for (const [key, value] of Object.entries(env)) {
        if (process.env[key] === undefined) process.env[key] = value
      }
    },
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res) => {
        const chunks = []
        for await (const chunk of req) chunks.push(chunk)
        const raw = Buffer.concat(chunks).toString('utf8')
        try {
          req.body = raw ? JSON.parse(raw) : {}
        } catch {
          req.body = null
        }

        // Tiny Express/Vercel-style helpers used by api/chat.js
        res.status = (code) => {
          res.statusCode = code
          return res
        }
        res.json = (data) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
        }

        try {
          const mod = await server.ssrLoadModule('/api/chat.js')
          await mod.default(req, res)
        } catch (err) {
          console.error('[local-api] error:', err)
          res.status(500).json({ error: 'Local API error' })
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), localApi()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})