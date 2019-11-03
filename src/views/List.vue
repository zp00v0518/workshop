<template>
  <ul id="app">
    <ListItem v-for="item in list" :index="item" :key="item" />

    <button @click="list.push(list.length+1)">Add</button>
    <button @click="list.pop()">Remove</button>
  </ul>
</template>

<script>
import ListItem from "../components/ListItem";

export default {
  name: "List",
  components: { ListItem },
  data() {
    return {
      list: [1, 2, 3]
    };
  }
};
</script>