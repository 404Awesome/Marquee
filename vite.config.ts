import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [vue(), legacy({
    targets: ['defaults', 'not IE 11']
  })],
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "https://v1.hitokoto.cn",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    },
  }
})
