import "./index.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import YouTube from 'vue3-youtube'
// @ts-ignore
import VLazyImage from "v-lazy-image";
import { VueQueryPlugin } from "vue-query";
const app = createApp(App)

app.use(router)
app.component('YouTube', YouTube)
app.component('v-lazy-image', VLazyImage)
app.use(VueQueryPlugin);
app.mount('#app')
