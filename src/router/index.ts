import { createRouter,createWebHashHistory} from "vue-router";
import Home from '../views/Home/index.vue';

const routes = [
  {
    path: '/',
    redirect:'/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue')
  },
  {
    path:'/home',
    name:'home',
    component: Home,
    children:[
      {
        path:'/home/index',
        component:()=>import('../views/Home/home.vue'),
      },
      {
        path:'/home/order',
        component:()=>import('../views/Order/index.vue'),
      },
      {
        path:'/home/users/member',
        component:()=>import('../views/User/member.vue'),
      },
      {
        path:'/home/users/usersofnumber',
        component:()=>import('../views/User/usersOfNumber.vue'),
      },
      {
        path:'/home/product/classification',
        component:()=>import('../views/Product/classification.vue'),
      },
      {
        path:'/home/product/commodity',
        component:()=>import('../views/Product/commodity.vue'),
      },
      {
        path:'/home/product/swipersetup',
        component:()=>import('../views/Product/swiperSetUp.vue'),
      },
      {
        path:'/home/system',
        component:()=>import('../views/System/index.vue'),
      },
    ]
  },
  {
    path: '/:catchAll(.*)', // vue3不能直接使用*号 使用/:catchAll(.*) 或者/:pathMatch(.*)
    name: 'notfound',
    component: () => import('../views/Redirect/index.vue')
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})