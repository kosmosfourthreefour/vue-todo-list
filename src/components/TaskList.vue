<template>
    <div class="taskDiv">
        <p v-for="todo in todos" v-bind:key="todo.id">
            <Task v-bind:aTask="todo"/>
        </p>
    </div>
</template>

<script>
import Task from '@/components/Task.vue';


export default {
    name: "TaskList",
    props: ['todos'],
    components: {
    Task,
  },
}
</script>

<style scoped>
    .taskDiv 
    {
        font-family: Arial;
        font-size: 35px;
    }
</style>