import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@elvia/elvis/css/elvis.min.css'
import '@elvia/elvis/elvis.js'
import '@elvia/elvis-header';
import '@elvia/elvis-illustrations/hello';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');
