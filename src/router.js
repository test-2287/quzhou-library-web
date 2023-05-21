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
    },
    {
        path: '/pay-result',
        component: () => import('@/pages/PayResult.vue')
    },
    {
        path: '/my-borrow',
        component: () => import('@/pages/MyBorrow.vue')
    },
    {
        path: '/my-collect',
        component: () => import('@/pages/MyCollect.vue')
    },
    {
        path: '/receiver-manage',
        component: () => import('@/pages/ReceiverManage.vue')
    },
    {
        path: '/changepwd',
        component: () => import('@/pages/ChangePwd.vue')
    },
    {
        path: '/order-list',    
        component: () => import('@/pages/OrderList.vue')
    },
    {
        path: '/order-detail',
        component: () => import('@/pages/OrderDetail.vue')
    },
    {
        path: '/reader-recommend',
        component: () => import('@/pages/ReaderRecommend.vue')
    },
    {
        path: '/borrow-rank',
        component: () => import('@/pages/BorrowRank.vue')
    },
    {
        path: '/lib-recommend',
        component: () => import('@/pages/LibRecommend.vue')
    },
    {
        path: '/lib-recommend-detail',
        component: () => import('@/pages/LibRecommendDetail.vue')
    },
    {
        path: '/notice-list',
        component: () => import('@/pages/NoticeList.vue')
    },
    {
        path: '/notice-detail',
        component: () => import('@/pages/NoticeDetail.vue')
    },
    {
        path: '/category',
        component: () => import('@/pages/Category.vue')
    },
    {
        path: '/borrow-history',
        component: () => import('@/pages/BorrowHistory.vue')
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