// @ts-nocheck
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Markdown from 'vite-plugin-md'
export default defineConfig({
  plugins: [vue({
    include: [/\.vue$/, /\.md$/], // <--
  }), , Markdown()],
  server: {
    host: 'localhost', // 指定服务器主机名
    port: 8888, // 指定服务器端口
  },
})