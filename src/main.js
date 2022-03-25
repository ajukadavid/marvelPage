import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./index.css";
import store from './store'
import { Vue3Mq } from "vue3-mq";

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Vue3Mq, {
    preset: 'bootstrap5'
});
app.mount('#app')
