const app = new Vue({
  el: '#app',
  template: `
  <div id='app'>
    {{count}}
    <button @click="count++">++</button>
    <button @click="count--">--</button>
  </div>
  `,
  data(){
    return {
      count: 0,
    }
  }
});








