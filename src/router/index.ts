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
    // component:() => import('../views/Home/index.vue'),
    children:[
      {
        path:'/',
        component:()=>import('../views/User/index.vue'),
      },
      {
        path:'/home/users',
        component:()=>import('../views/User/index.vue'),
      },
      {
        path:'/home/list',
        component:()=>import('../views/Home/List.vue'),
      },
      {
        path:'/home/edit',
        name: 'edit',
        component:()=>import('../views/Home/Edit.vue'),
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