import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import 'virtual:svg-icons-register'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Tippy from 'vue-tippy'

import './style.scss'

const app = createApp(App)
app.use(router)
    .use(ElementPlus)
    .use(Tippy)


app.mount('#app')
