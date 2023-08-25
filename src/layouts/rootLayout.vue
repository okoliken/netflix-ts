<template>
    <component :is="layout">
        <slot />
    </component>
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const layout = computed(() => {
    const layouts = route.meta.layout || 'defaultLayout'
    return defineAsyncComponent(() => import(`../layouts/${layouts}.vue`))
})

</script>