import { Component, createApp, Plugin } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'

interface ConfigOptions {
    plugins?: Plugin[]
    routes?: any[]
}

export function init(mountComponent: Component, config: ConfigOptions = {}) {
    const app = createApp(mountComponent)

    const pinia = createPinia()
    app.use(pinia)

    if (config.routes !== undefined) {
        const router = createRouter({
            history: createWebHashHistory(),
            routes: config.routes,
        })
        app.use(router)
    }

    if (config.plugins !== undefined) {
        config.plugins.forEach((plugin) => {
            app.use(plugin)
        })
    }

    app.mount('#app')
}
