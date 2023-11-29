import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    //history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHistory('/lib-admin/'),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/HomeView.vue"),
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../views/login.vue"),
        },
        {
            path: "/admin/manage",
            name: "manage",
            component: () => import("../views/Admin/Manage.vue"),
        },
        {
            path: "/admin/book",
            name: "book",
            component: () => import("../views/Admin/Book.vue"),
        },
        {
            path: "/admin/user",
            name: "user",
            component: () => import("../views/Admin/User.vue"),
        },
    ],
});

export default router;
