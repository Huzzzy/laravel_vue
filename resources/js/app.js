import "./bootstrap";

import router from "./router";
import store from "./store";
import Index from "./components/Index.vue";

import { createApp } from "vue";

createApp(Index).use(router).use(store).mount("#app");
