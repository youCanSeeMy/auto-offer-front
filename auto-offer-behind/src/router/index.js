import Vue from 'vue'
import Router from 'vue-router'
import BlogLogin from '@/components/manage/BlogLogin.vue'
import BlogIndex from '@/components/home/BlogIndex.vue'
import Decoration from '@/components/views/Decoration.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/decoration',
      name: 'Decoration',
      component: Decoration
    }
  ]
})
