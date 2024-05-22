<template>
    <div :class="['flex flex-col lg:grid lg:grid-cols-1 lg:gap-x-4 transition-opacity motion-reduce:transition-none duration-500', 'opacity-1']">
        <div class="flex flex-col space-y-4" :class="project.alignLeft ? 'text-left' : 'lg:text-right'">
            <p>{{ project.yearCompleted }}</p>
            <h3 class="text-xl font-extrabold pb-2">{{ project.projectName }}</h3>
            <p class="text-slate-500 dark:text-slate-300">{{ project.description }}</p>
            <p class="text-slate-600">{{ project.techStack }}</p>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import { LinkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    project: Object
})

// Static Images
const showProject = ref(false)

let getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}

</script>