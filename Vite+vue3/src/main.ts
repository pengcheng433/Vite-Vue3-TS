import './lib/ui.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { Router } from './router';
const app = createApp(App);
app.use(Router);
app.mount('#app')                                                                                                                                                 