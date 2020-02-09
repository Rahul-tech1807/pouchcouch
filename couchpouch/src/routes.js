import home from './components/home.vue'
import about from './components/about.vue'
import contact from './components/contact.vue'
// import loginform from './components/loginform.vue'
// import navbar from './layout/navbar.vue'

export const routes = [
     // {path: '/' , component : loginform},
     {path: '/home' , component : home },
     {path: '/about' , component : about },
     {path: '/contact' , component : contact }
];