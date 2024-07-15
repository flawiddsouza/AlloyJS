import { Component, createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'

export function init(mountComponent: Component, routes?: any[]) {
    const app = createApp(mountComponent)

    const pinia = createPinia()
    app.use(pinia)

    if (routes !== undefined) {
        const router = createRouter({
            history: createWebHashHistory(),
            routes,
        })
        app.use(router)
    }

    app.mount('#app')
}
