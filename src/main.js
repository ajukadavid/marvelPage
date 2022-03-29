import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./index.css";
import store from './store'
import { MqResponsive } from "vue3-mq";

const app = createApp(App)
app.use(store)
app.use(router)
app.component("MqResponsive", MqResponsive)
app.mount('#app')
