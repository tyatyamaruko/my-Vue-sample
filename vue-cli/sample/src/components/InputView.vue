<template>
  <div>
    <input type="text" placeholder="Input Any Todo" v-model="this.todo"/>
    <button @click="addTodo">追加</button>
  </div>
</template>


<script>
export default {
    data() {
        return {
            todo: "",
            todos: []
        }
    },
    methods: {
        addTodo() {
            if (this.todo.length == 0) {
                return;
            }
            this.todos.push(this.todo)
            this.$emit('todos', this.todos)
            this.todo = ""
        }
    }
}
</script>

<style scoped>
    div {
        margin-top: 30px;
    }

    input {
        width: 50%;
        font-size: 1.3rem;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #000;
    }

    button {
        width: 100px;
        font-size: 1.3rem;
        margin-left: 10px;
        background: rgb(120, 60, 100);
        color: #fff;
        border: solid 1px #000;
        border-radius: 5px;
    }
</style>