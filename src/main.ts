import "./index.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import YouTube from 'vue3-youtube'

// @ts-ignore
import VLazyImage from "v-lazy-image";
import { VueQueryPlugin, type VueQueryPluginOptions } from "vue-query";
import {Vue3ProgressPlugin} from '@marcoschulte/vue3-progress';

import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';



const app = createApp(App)


const vueQueryPluginOptions: VueQueryPluginOptions = {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    },
  };
  

app.use(Vue3Toasity, {
  autoClose: 3000,
} as ToastContainerOptions)

app.use(router)
app.component('YouTube', YouTube)
app.use(Vue3ProgressPlugin)
app.component('v-lazy-image', VLazyImage)
app.use(VueQueryPlugin, vueQueryPluginOptions);
app.mount('#app')
