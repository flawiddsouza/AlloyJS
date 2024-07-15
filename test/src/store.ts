import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        message: 'Hey'
    }),
    actions: {
    },
})
