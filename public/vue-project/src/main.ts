import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)

// Configurer Axios
axios.defaults.baseURL = 'http://localhost:3000'; //URL de votre backend


app.config.globalProperties.$axios = axios;

app.use(router)

app.mount('#app')
