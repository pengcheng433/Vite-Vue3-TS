import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { createWebHashHistory, createRouter } from "vue-router"

import HellowWorld from "./components/HelloWorld.vue"
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
const history = createWebHashHistory()
const Router = createRouter({ history:history, routes: [{ path: "/", component: Home },{ path: "/doc", component: Doc }] })
const app = createApp(App);
app.use(Router);
app.mount('#app')
                                                                                                                                                                                                                                 