import { createApp } from 'vue'
import App from './App.vue'
import { createWebHashHistory, createRouter } from "vue-router"

import HellowWorld from "./components/HelloWorld.vue"

const history = createWebHashHistory()
const Router = createRouter({ history:history, routes: [{ path: "/home", component: HellowWorld }] })
const app = createApp(App);
app.use(Router);
app.mount('#app')
