import Vue from 'vue'
import Router from 'vue-router'


import Home from './views/home/Home.vue'
import Blog from './views/blog/Blog.vue'
import ArticalList from './views/blog/articalList/ArticalList.vue'
import ArticalContent from './views/blog/articalContent/ArticalContent.vue'
import NoticeContent from './views/blog/noticeContent/noticeContent.vue'

Vue.use(Router)

const router=new Router({
  mode:'history',
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
      name: 'newslist',
      component: ArticalList
    },
    {
      path: '/blog/news/content/:id',
      name: 'newscontent',
      component: ArticalContent
    },
    {
      path: '/blog/notice/content/:id',
      name: 'noticecontent',
      component: NoticeContent
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
    
  ]
})
//导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//   //debugger
//   if (to.path === '/admin/login') {
//     next();
//   } else {
//     let token = sessionStorage.getItem('Authorization');
//     // console.log('rb',token)
//     if (!token) {
//       next('/admin/login');
//     } else {
//       next();
//     }
//   }
// });

export default  router;