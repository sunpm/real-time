import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@/assets/styles/resrt.scss'

const app = createApp(App)

app
  .use(createPinia())
  .mount('#app')
