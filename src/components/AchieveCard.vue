<template>
    <div class="flex flex-col flex-1 rounded-md bg-white shadow-md hover:shadow-lg hover:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md dark:bg-slate-800 text-left p-4 transition-all duration-300">
        <h3 class="text-xl font-extrabold text-center" style="color: mediumspringgreen">{{achievement.type}}</h3>
        <h3 class="text-xl font-extrabold">{{ achievement.title }} <span v-if="examVisible">({{achievement.examCode}})</span></h3>
        <p>Issued By : <span class="italic">{{achievement.issuedBy}}</span></p>
        <p>Issue Date : <span class="italic">{{ achievement.issueDate }}</span></p>
        <div class="text-cyan-600 pt-4 flex flex-wrap mt-auto">
            <p v-for="hashtag in achievement.hashtags" class="pr-4 last:pr-0">#{{ hashtag }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    achievement: Object,
})


const examVisible = ref(false)

onMounted(() => {
	checkExamCode()
})

const checkExamCode = () => {
	if (props.achievement.examCode != "") {
		examVisible.value = true
	} else {
		examVisible.value = false
	}
}

</script>