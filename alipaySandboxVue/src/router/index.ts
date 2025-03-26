import { createRouter, createWebHistory } from 'vue-router'
import PaymentPage from '../view/PaymentPage.vue'
import PaymentResult from '../view/PaymentResult.vue'

const routes = [
  { path: '/', component: PaymentPage },
  { path: '/payment/result', component: PaymentResult }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;