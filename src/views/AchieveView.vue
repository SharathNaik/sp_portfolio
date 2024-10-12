<template>
    <section class="min-h-screen w-full" ref="achieveSection" id="achieve-section">
        <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
            <h1 class="text-3xl font-bold pr-5">⛳ Certifications</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
        </div>
        <div :class="['flex flex-col space-y-4 lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-4 lg:space-y-0 mb-36 transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
            <AchieveCard
                v-for="(achievement, index) in content"
                :key="index" :achievement="achievement"
            />
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import AchieveCard from '../components/AchieveCard.vue'
import { onIntersect } from '../composables/onIntersect';

const props = defineProps({
    content: Object,
    transitions: Object
})

const achieveSection = ref({})
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? onIntersect(achieveSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) : true

</script>