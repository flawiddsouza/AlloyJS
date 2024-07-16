import { vue } from 'alloyjs-ui'
import './style.css'
import App from './App.vue'

vue.init(App, {
    routes: [
        {
            path: '/test',
            component: () => import('./components/Frame.vue')
        }
    ]
})
