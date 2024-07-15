<template>
    <div>{{ appName }} {{ store.message }}</div>
</template>

<script setup lang="ts">
import { useStore } from '../store'
import { ref } from 'vue'

const store = useStore()
const appName = ref('My App')
</script>
