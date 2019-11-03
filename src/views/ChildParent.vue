<template>
  <div>
    <Child @send-greeting="greeting = $event" />
    <div>{{greeting}}</div>
  </div>
</template>

<script>
import Child from "../components/Child";

export default {
  name: "ChildParent",
  components: { Child },
  data() {
    return {
      greeting: ""
    };
  },
  created() {
    const list = ["p-h_2", "p-h_1"];
    this.$store.commit("SET_LIST_IMG", list);
  }
};
</script>




