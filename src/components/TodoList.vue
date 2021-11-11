<style scoped>
.create-task-input-box {
  position: relative;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: inherit;
  padding: 12px 12px 12px 70px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  z-index: 10;
}
.create-task-input-box-label {
  position: absolute;
  top: 8px;
  left: 17px;
  padding: 5px 10px 5px 10px;
  z-index: 20;
}
.todo-list {
  position: relative;
  font-size: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.todo-list-checkbox {
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid hsl(0, 0%, 85%);
  border-radius: 1px;
  vertical-align: sub;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1rem;
  outline: none;
}

.delete-icon {
  color: darkred;
}
</style>

<template>
  {{ info }}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />
  <div class="container">
    <div class="col-md-12 col-12 col-sm-12">
      <div class="card">
        <div class="card-header">
          <label for="create-task-input-box" class="create-task-input-box-label">
            <i class="fas fa-greater-than fa-3x"></i>
          </label>
          <input type="text"
                 class="custom-control-input create-task-input-box"
                 id="create-task-input-box"
                 placeholder="What needs to be done?"
                 v-model="newTask"
                 @keyup.enter="addTask"
          >
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover">
              <tbody>
              <tr
                  class="todo-list"
                  v-for="(task, index) in tasks"
                  v-bind:key="task"
              >
                <td class="p-1 text-center">
                  <div class="custom-checkbox custom-control">
                    <input type="checkbox"
                           data-checkboxes="mygroup"
                           class="custom-control-input todo-list-checkbox"
                           v-bind:id="getCheckBoxId(index)"
                    >
                    <label v-bind:for="getCheckBoxId(index)" class="custom-control-label">&nbsp;</label>
                  </div>
                </td>
                <td>{{task}}</td>
                <td class="p-0 text-center text-right">
                  <i
                      class="fas fa-times delete-icon"
                      v-bind:id="getDeleteIconId(index)"
                      @click="deleteTask(index)"
                  ></i>
                </td>
              </tr>
              </tbody></table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
class Task {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}
export default {
  data: function () {
    return {
      tasks: [
          'Ecommerce website',
          'Ecommerce website2',
          'Android App',
          'Logo Design',
          'Java Project'
      ],
      info: null,
      newTask: ''
    }
  },
  methods: {
    getCheckBoxId: function (index) {
      return `checkbox-${index}`
    },
    getDeleteIconId: function (index) {
      return `delete-icon-${index}`
    },
    addTask: function() {
      const value = this.newTask && this.newTask.trim();
      if (!value) {
        return;
      }
      this.tasks.push(value);
      this.newTask = "";
    },
    deleteTask: function (index) {
      this.tasks.splice(index, 1);
    },
    buildTaskFromJson: function (data) {
      const taskkkk = new Task(data.id, data.title)
      console.log(taskkkk)
      return taskkkk;
    }
  },
  mounted () {
    const self = this
    axios
        .get('http://localhost/tasks')
        .then(response => this.info = response.data.map(function (data) {
          return self.buildTaskFromJson(data)
        }))
  }
}
</script>