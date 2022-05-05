import Main from '@/pages/Main.vue'
import PostsPage from '@/pages/PostsPage.vue'
import PostIdPage from '@/pages/PostIdPage.vue'
import PostsPageCompositionApi from '@/pages/PostsPageCompositionApi.vue'



import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/welcome',
        component: Main
    },
    {
        path: '/',
        component: PostsPage
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/composition',
        component: PostsPageCompositionApi
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router