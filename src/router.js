import Vue from 'vue'
import Router from 'vue-router'


import Home from './views/Home/Home.vue'
import Blog from './views/Blog/Blog.vue'
import NewsList from './views/Blog/NewsList/NewsList.vue'

import AdminLogin from './views/Admin/Login/Login.vue'
import Admin from './views/Admin/Admin.vue' 
import AcgArtical from './components/ACGBLOG/article/artical.vue'
Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog/news/list',
      name: 'news',
      component: NewsList
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/admin/login',
      name:'login',
      component:AdminLogin,
      
      
    },
    {
      path:'/admin',
      name:'admin',
      component:Admin,
      children:[
        {
          path:'acgblog/artical',
          name:'acg-artical',
          component:AcgArtical
        }
      ]

    },
    
  ]
})
//导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  //debugger
  if (to.path === '/admin/login') {
    next();
  } else {
    let token = sessionStorage.getItem('Authorization');
    console.log('rb',token)
    if (!token) {
      next('/admin/login');
    } else {
      next();
    }
  }
});

export default  router;