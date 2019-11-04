const app = new Vue({
  el: '#app',
  template: `<div class="app">{{message}}</div>`,
  data(){
    return {
      message: 'Hello, everybody'
    }
  }
});
