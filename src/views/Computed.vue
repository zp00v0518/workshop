<template>
  <div>
    <input type="text" v-model="value" />
    <div>{{turn}}</div>
    <!-- <div>{{turn2}}</div> -->
  </div>
</template>

<script>
export default {
  name: "Computed",
  data() {
    return {
      value: ""
    };
  },
  created() {
    const list = ["computed"];
    this.$store.commit("SET_LIST_IMG", list);
  },
  computed: {
    turn() {
      return Array.from(this.value)
        .reverse()
        .join("");
    },
    // turn2() {
    //   alert('turn2');
    //   return "turn2";
    // }
  }
};
</script>



