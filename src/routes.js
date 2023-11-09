import { createWebHistory,createRouter } from "vue-router";
import routerHome from './router-component/A_routHome.vue';
import Profile from './router-component/A_profile.vue';
import Login from './router-component/A_login.vue';

import PageNotFound from './router-component/A_PageNotFound.vue';

const routes=[
    {
        name: "A_routHome",
        path:'/',
        component: routerHome
    },
    {
        name: "profile",
        path:'/profile/:name',
        component: Profile
     },
    {
        name: "login",
        path:'/avbhbhuhjj/uhjij',
        component: Login
    },
    {
        name: "NotFound",
        path:'/:pathMatch(.*)*',
        component: PageNotFound,
    },
];
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;






