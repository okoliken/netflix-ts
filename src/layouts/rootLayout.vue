<template>
    <component :is="layout">
        <slot />
    </component>
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.meta.layout)
const layout = computed(() => {
    const layouts = route.meta.layout || 'defaultLayout'
    return defineAsyncComponent(() => import(`../layouts/${layouts}.vue`))
})

</script>