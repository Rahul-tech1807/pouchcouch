import home from './components/home.vue'
import addrecord from './components/addrecord.vue'
import contact from './components/contact.vue'
import loginform from './components/loginform.vue'
import register from './components/register.vue'

export const routes = [
     {path: '/' , component : loginform},
     {path: '/register' , component : register},
     {path: '/home' , component : home },
     {path: '/addrecord' , component : addrecord },
     {path: '/contact' , component : contact }
];