import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '../Firebase/config'

// auth guards
const authRequired = (to, from, next) => {
  let user = projectAuth.currentUser
     if (!user) {
      next({ name: 'Welcome' })
      } else {
        next()
      }
}

const noAuthRequired = (to,from, next) => {
  let user = projectAuth.currentUser
  if (user) {
    next({ name: 'Chatroom' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: noAuthRequired
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: authRequired
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
