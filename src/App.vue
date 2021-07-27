<template>
  <div id="app">
    <ErrorRenderer v-bind:errors="errors"></ErrorRenderer>
    <input class="new-task"
           autofocus
           autocomplete="off"
           placeholder="What needs to be done?"
           v-model="new_task"
           @keyup.enter="addTodo"
    />
    <TodoList v-bind:tasks="tasks"></TodoList>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  </div>
</template>

<script>
import ErrorRenderer from './components/ErrorRenderer'
import TodoList from "@/components/TodoList";
import axios from 'axios'

class Task {
  constructor(id, title) {
    this.id = id
    this.title = title
    this.completed = false
  }
}

export default {
  name: 'App',
  components: {
    ErrorRenderer,
    TodoList
  },
  data: function () {
    return {
      errors: [],
      new_task: "",
      tasks: []
    }
  },
  mounted() {
    this.getTodo()
  },
  methods: {
    getTodo: function () {
      axios
          .get('http://127.0.0.1/api/tasks')
          .then(
              response => (
                  this.tasks = response.data.map(task => new Task(task.id, task.title))
              )
          )
    },
    addTodo: function () {
      const value = this.new_task && this.new_task.trim();
      this.errors = []
      let errors = this.errors;
      if (!value) {
        return;
      }
      const bodyFormData = new FormData();
      bodyFormData.append('title', value);
      axios({
        method: 'post',
        url: 'http://127.0.0.1/api/tasks/create',
        data: bodyFormData,
        headers: {"Content-Type": "multipart/form-data"},
      })
          .then(
              response => (
                  console.log(response.data.map(task => new Task(task.id, task.title)))
              )
          )
          .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              if (400 <= error.response.status < 500) {
                if (error.response.data.type === 'https://github.com/tarohida/php-todo-ddd/wiki/errors#validation-error') {
                  error.response.data.invalid_params.map(invalid_param =>
                      errors.push(invalid_param.name + ': ' + invalid_param.reason)
                  );
                }
              }
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
      this.getTodo()
    }
  }
}
</script>

<style>
</style>
