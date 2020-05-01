<template>
  <div id="app">
    
    <Header theTitle="Todo List ✔️"/>
    <!-- send 'tasks' array to the TaskList child component -->
    <TaskList v-bind:todos="tasks"/>

    <input id="taskInput" type="text">
    <button @click="addTask">ADD</button>

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
  methods:
  {
    addTask(){
      let field = document.getElementById('taskInput');
      this.tasks.push({id: this.tasks.length + 1, title: field.value, completed: false});
    }
  },

  data(){
    return {
      tasks: [
      {id: 1, title: "practice vue.js", completed: false},
      {id: 2, title: "play the otamatone", completed: false},
      {id: 3, title: "make banana ice cream 🍌", completed: false}
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

#app {
  border: 1px solid #CCC;
  box-shadow: 6px 6px 5px #CCC;
  margin: 0 auto;
  margin-top: 10%;
  max-width: 700px;
}
</style>
