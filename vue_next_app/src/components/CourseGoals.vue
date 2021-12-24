<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal"></slot>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "CourseGoals",
        data() {
            return {
                goals: ['Finish the course', 'Learn a Vue']
            }
        }
    }
</script>

<style scoped>

</style>