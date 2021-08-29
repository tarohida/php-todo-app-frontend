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

#checkbox-1 {
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
</style>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />
  <div class="container">
    <div class="col-md-12 col-12 col-sm-12">
      <div class="card">
        <div class="card-header">
          <label for="create-task-input-box" class="create-task-input-box-label">
            <i class="far fa-plus-square fa-3x"></i>
          </label>
          <input type="text"
                 class="custom-control-input create-task-input-box"
                 id="create-task-input-box"
                 placeholder="What needs to be done?"
          >
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover">
              <tbody>
              <tr
                  class="todo-list"
                  v-for="task in tasks"
                  v-bind:key="task"
              >
                <td class="p-0 text-center">
                  <div class="custom-checkbox custom-control">
                    <input type="checkbox" data-checkboxes="mygroup" class="custom-control-input" id="checkbox-1">
                    <label for="checkbox-1" class="custom-control-label">&nbsp;</label>
                  </div>
                </td>
                <td>{{task}}</td>
                <td class="p-0 text-center text-right">
                  <a class="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="" data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a>
                  <a class="btn btn-danger btn-action" data-toggle="tooltip" title="" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')" data-original-title="Delete"><i class="fas fa-trash"></i></a>
                </td>
              </tr>
              <tr class="todo-list">
                <td class="p-0 text-center">
                  <div class="custom-checkbox custom-control">
                    <input type="checkbox" data-checkboxes="mygroup" class="custom-control-input" id="checkbox-4">
                    <label for="checkbox-4" class="custom-control-label">&nbsp;</label>
                  </div>
                </td>
                <td>Android App</td>
                <td class="p-0 text-center text-right">
                  <a class="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="" data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a>
                  <a class="btn btn-danger btn-action" data-toggle="tooltip" title="" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')" data-original-title="Delete"><i class="fas fa-trash"></i></a>
                </td>
              </tr>
              <tr class="todo-list">
                <td class="p-0 text-center">
                  <div class="custom-checkbox custom-control">
                    <input type="checkbox" data-checkboxes="mygroup" class="custom-control-input" id="checkbox-5">
                    <label for="checkbox-5" class="custom-control-label">&nbsp;</label>
                  </div>
                </td>
                <td>Logo Design</td>
                <td class="p-0 text-center text-right">
                  <a class="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="" data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a>
                  <a class="btn btn-danger btn-action" data-toggle="tooltip" title="" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')" data-original-title="Delete"><i class="fas fa-trash"></i></a>
                </td>
              </tr>
              <tr class="todo-list">
                <td class="p-0 text-center">
                  <div class="custom-checkbox custom-control">
                    <input type="checkbox" data-checkboxes="mygroup" class="custom-control-input" id="checkbox-6">
                    <label for="checkbox-6" class="custom-control-label">&nbsp;</label>
                  </div>
                </td>
                <td>Java Project</td>
                <td class="p-0 text-center text-right">
                  <a class="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="" data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a>
                  <a class="btn btn-danger btn-action" data-toggle="tooltip" title="" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')" data-original-title="Delete"><i class="fas fa-trash"></i></a>
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
export default {
  data: function () {
    return {
      tasks: [
          'Ecommerce website',
          'Ecommerce website2',
      ]
    }
  }
}
</script>