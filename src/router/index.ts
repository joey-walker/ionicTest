import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/tabs/games'
    },
    {
        path: '/tabs/',
        // @ts-ignore
        component: Tabs,
        children: [
            {
                path: '',
                redirect: 'games'
            },
            {
                path: 'games',
                component: () => import('@/views/games/GamesTab.vue')
            },
            {
                path: 'news',
                component: () => import('@/views/news/NewsTab.vue')
            },
            {
                path: 'store',
                component: () => import('@/views/store/StoreTab.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
