import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AdminDashboard from '../views/AdminDashboard.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/admin', component: AdminDashboard }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;