import Index from '../pages/index/index.vue'
import Cart from '../pages/cart/Cart.vue'
import Detail from '../pages/detail/Detail.vue'
import Login from '../pages/login/Login.vue'
import Register from '../pages/register/Register.vue'
import Search from '../pages/search/Search.vue'
import Personal from '../pages/personal/Personal.vue'

import SelfInfo from '../pages/personal/SelfInfo.vue'
import Order from '../pages/personal/Order.vue'
import Message from '../pages/personal/Message.vue'
import Discount from '../pages/personal/Discount.vue'
import Address from '../pages/personal/Address.vue'

export default [
  {
    path: '/',
    component: Index
  },
  {
    path: '/detail/:id',
    component: Detail,
  },
  {
    path: '/cart',
    component: Cart,
    meta:{notheader:true}
  },
  {
    path: '/login',
    component: Login,
    meta:{notheader:true}
  },
  {
    path: '/register',
    component: Register,
    meta:{notheader:true,notFooter:true}
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/personal',
    component: Personal,
    redirect: '/personal/self_info',
    children: [
      {
        path: 'self_info',
        component: SelfInfo
      },
      {
        path: 'order',
        component: Order
      },
      {
        path: 'message',
        component: Message
      },
      {
        path: 'discount',
        component: Discount
      },
      {
        path: 'address',
        component: Address
      }
    ]
  }
]
