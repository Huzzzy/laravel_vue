//import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHistory } from "vue-router/dist/vue-router";

import PostComponent from "./components/PostComponent.vue";
import TagComponent from "./components/TagComponent.vue";

const routes = [
    {
        path: '/posts',
        component: PostComponent
    },
    {
        path: '/tags',
        component: TagComponent
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
