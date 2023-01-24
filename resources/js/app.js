import './bootstrap';

import router from "./router";
import Index from "./components/Index.vue";

import { createApp } from 'vue';

createApp(Index).use(router).mount('#app')

