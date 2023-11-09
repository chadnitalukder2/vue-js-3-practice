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
        name: "profile",
        path:'/profile/:name/:id',
        component: Profile
     },
    {
        name: "login",
        path:'/avbhbhuhjj/uhjij',
        component: Login
    },
];
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;






