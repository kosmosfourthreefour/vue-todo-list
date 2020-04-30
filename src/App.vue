<template>
  <div id="app">
    
    <Header theTitle="Task List ✔️"/>
    <!-- send 'tasks' array to the TaskList child component -->
    <TaskList taskTitle="Tasks:" v-bind:todos="tasks"/>

  </div>
</template>

<script>
import Header from './components/Header.vue';
import TaskList from './components/TaskList.vue';

export default {
  name: 'App',
  components: {
    Header,
    TaskList
  },

  data(){
    return {
      tasks: [
      {id: 1, title: "learn to draw left-handed", completed: true},
      {id: 2, title: "play the viola", completed: true},
      {id: 3, title: "make stir fry", completed: false}
    ]    
    }
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
</style>
