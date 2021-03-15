import Vue from 'vue'
import VueRouter from 'vue-router'
//实现路由按需加载
const Recommend = () => import('../views/Recommend.vue')
const Singer = () => import('../views/Singer.vue')
const Rank = () => import('../views/Rank.vue')
const Search = () => import('../views/Search.vue')
const Detail = () => import('../views/Detail.vue')
const Account = () => import('../views/Account.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/recommend' },
  {
     path: '/recommend', component: Recommend ,
     children:[
       {
         path:'detail/:id/:type',
         component: Detail ,
       }
     ],
  },
  { path: '/singer', component: Singer,
    children:[
      {
        path:'detail/:id/:type',
        component: Detail ,
      }]
  }, 
  { path: '/rank', component: Rank ,
  children:[
    {
      path:'detail/:id/:type',
      component: Detail ,
    }
  ],
},
  { path: '/search', component: Search },
  { path: '/account', component: Account }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
