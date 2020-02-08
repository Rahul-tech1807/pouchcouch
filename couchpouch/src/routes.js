import home from './components/home.vue'
import about from './components/about.vue'
import contact from './components/contact.vue'

export const routes = [
     {path: '' , component : home },
     {path: '/about' , component : about },
     {path: '/contact' , component : contact }
];