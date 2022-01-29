<template>
  <div>
    <Header></Header>
    <input-view @todos="getTodos"></input-view>

    <todo-list :todos="this.todos"></todo-list>
  </div>
</template>

<script>
import Header from "./components/myheader";
import InputView from "./components/InputView.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    Header,
    InputView,
    TodoList,
  },
  data() {
    return {
      msg: "Hello World",
      todos: []
    };
  },
  methods: {
    getTodos(todos) {
      this.todos = todos
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
