const LiItem = Vue.component('li-item', {
  props: ['index'],
  template: `
  <li :class="index % 2 === 0 ? 'yellow' : 'blue'">{{index}}</li>
  `,
});

const app = new Vue({
  el: '#app',
  components: { LiItem },
  template: `
  <ul id='app'>
    <li-item v-for="item in list" :index="item"/>
    
    <button @click="list.push(list.length+1)">Add</button>
    <button @click="list.pop()">Remove</button>
  </ul>
  `,
  data() {
    return {
      list: [1, 2, 3],
    };
  },
});
