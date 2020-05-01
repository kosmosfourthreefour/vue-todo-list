<template>
    <div class="todo-item" v-bind:class="{'is-complete':aTask.completed}">
        <p>
            <input type="checkbox" v-on:click="markComplete">
            {{aTask.title}}
        </p>
    </div>
</template>

<script>
export default {
    name: "Task",
    props: ['aTask'],
    methods:
    {
        markComplete(){
            this.aTask.completed = !this.aTask.completed;
        }
    }
}
</script>

<style scoped>
    .todo-item
    {
        background: #f4f4f4;
        border-bottom: 1px #ccc dotted;
        padding: 10px;
    }

    .is-complete
    {
        text-decoration: line-through;
    }
</style>