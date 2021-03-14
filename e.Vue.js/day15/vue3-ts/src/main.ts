import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store/index'
import './index.css'

createApp(App).use(store, key).mount('#app')
