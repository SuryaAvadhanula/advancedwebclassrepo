import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from '../pages/Home.vue';
//import Messages from '../pages/Messages.vue';
import Generic from '../pages/Generic.vue';
import Login from '../pages/Login.vue';
import session from "../models/session";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/wall', component: () => import('../pages/Wall.vue') },
  { path: '/signup', component: Generic, props: { title: 'Signup Page!' } },
  { path: '/about', component: Generic, props: { title: 'About Page!' } },
  { path: '/contact', component: Generic, props: { title: 'Contact Page!' } },
  { path: '/hidden', component: Generic, props: { title: 'Hidden Page!' } }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'is-active',
})

router.beforeEach((to, from) => {
    if(session.destinationUrl == null && to.path != '/login') {
        session.destinationUrl = to.path;
    }
    console.log({ to });
    const protectedUrls = ['/messages', '/wall', '/feed', '/hidden'];
    console.log({ protectedUrls });

    if (protectedUrls.includes(to.path)) { // list of paths that require login
        console.log('requires login');
        if (!session.user) {
            return '/login';
        }
    }
})

export default router;