// Routing Module

import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../publilc/pages/home.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:"/home", component:HomeComponent},
        {path:"/", redirect:"/home"}
    ]
});

export default router;