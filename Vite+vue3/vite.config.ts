import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { md } from "./plugins/md";
import Markdown from 'vite-plugin-md'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    include: [/\.vue$/, /\.md$/], // <--
  }), Markdown(),],
  server: {
    host: 'localhost', // 指定服务器主机名
    port: 5000, // 指定服务器端口
  },



})
