const app = new Vue({
  el: '#app',
  template: `
  <ul id='app'>
    <li v-for="item in list">{{item}}</li>
    
    <button @click="list.push(list.length+1)">Add</button>
    <button @click="list.pop()">Remove</button>
  </ul>
  `,
  data(){
    return {
      list: [1,2,3],
    }
  }
});













