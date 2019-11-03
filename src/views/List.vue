<template>
  <ul class="list">
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
  },
  created() {
    const list = ["list-1", 'list-2'];
    this.$store.commit("SET_LIST_IMG", list);
  }
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  & button{
    font-size: inherit;
  }
}
</style>



