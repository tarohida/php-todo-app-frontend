import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const vm = createApp(App).mount('#app')
console.log(vm.$data)

// import Increments from './components/Increments.vue'
// const app = createApp(Increments)
// const vm = app.mount('#app')
// setInterval(function(){ vm.increment() }, 1000);

