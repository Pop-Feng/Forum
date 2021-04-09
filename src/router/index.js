import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home')
const Blog = () => import('../views/blog/Blog')
const Questions = () => import('../views/questions/Questions')
const Forum = () => import('../views/forum/Forum')
const Login = () => import('components/common/Login')
const Register = () => import('components/common/Register')
const Release = () => import('components/content/Release')
const BlogDetail = () => import('../views/blog/BlogDetail')
const publishForum = () => import('views/forum/child/PublishingForum')
const ForumDetail = () => import('views/forum/child/ForumDetail')
const PostQuestion = () => import('views/questions/child/PostQuestion')
const QuestionDetail = () => import('views/questions/child/QuestionDetail')








//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      keepAlive: true//导航栏在该页面显示
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      keepAlive: false//导航栏不允许在该页面显示
    }

  },
  {
    path: '/home',
    component: Home,
    meta: {
      keepAlive: true//导航栏在该页面显示
    }

  },
  {
    path: '/blog',
    component: Blog,
    meta: {
      keepAlive: true//导航栏在该页面显示
    }
  },
  {
    path: '/questions',
    component: Questions,
    meta: {
      keepAlive: true//导航栏在该页面显示
    }
  },
  {
    path: '/forum',
    component: Forum,
    meta: {
      keepAlive: true//导航栏在该页面显示
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      keepAlive: false//导航栏不允许在该页面显示
    }
  },
  {
    path: '/release',
    component: Release,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/detail/:id',
    component: BlogDetail,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/publishForum',
    component: publishForum,
    meta: {
      keepAlive: false
    }

  },
  {
    path: '/forumdetail/:id',
    component: ForumDetail,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/postquesion',
    component: PostQuestion,
    meta: {
      keepAlive: false
    }

  },
  {
    path: '/questionditail/:id',
    component: QuestionDetail,
    meta: {
      keepAlive: false
    }
  }


]


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)

}


const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router