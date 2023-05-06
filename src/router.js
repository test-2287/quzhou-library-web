import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/pages/Home.vue')
    },
    {
        path: '/book-detail',
        component: () => import('@/pages/BookDetail.vue')
    },
    {
        path: '/search',
        component: () => import('@/pages/Search.vue')
    },
    {
        path: '/my-booklist',
        component: () => import('@/pages/MyBookList.vue')
    },
    {
        path: '/order',
        component: () => import('@/pages/Order.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
})

export default router