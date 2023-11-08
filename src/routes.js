import { createWebHistory,createRouter } from "vue-router";
import routerHome from './router-component/A_routHome.vue';
import Profile from './router-component/A_profile.vue';
import Login from './router-component/A_login.vue';

const routes=[
    {
        name: "A_routHome",
        path:'/',
        component: routerHome
    },
    {
        name: "A_profile",
        path:'/',
        component: Profile
    },
    {
        name: "A_login",
        path:'/',
        component: Login
    },
];
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;






