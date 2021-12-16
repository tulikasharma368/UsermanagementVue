import Adduser from '../components/Adduser/Adduser.vue'
import Edituser from '../components/Edituser/Edituser.vue'
const routes = [
  {
    path: '/adduser',
    name: 'adduser',
    component: Adduser
  },
  {
    path: '/edituser',
    name: 'edituser',
    component: Edituser
  },
  ]

  export default routes;