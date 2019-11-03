<template>
  <div>
    <div v-if="index === 1">First if</div>
    <div v-else-if="index === 2">Second if</div>
    <div v-else>Third if</div>

    <div class="btn">
      <button @click="index = 1">Set 1</button>
      <button @click="index = 2">Set 2</button>
      <button @click="index = 3457">Set 3457</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hooks",
  data() {
    return {
      index: 1
    };
  },
  beforeCreate() {
    alert("beforeCreate");
  },
  created() {
    alert(`creted, index:${this.index}`);
    const list = ["hooks", 'lifecycle'];
    this.$store.commit("SET_LIST_IMG", list);
  },
  beforeMount () {
    alert(`beforeMount`);
  },
  mounted() {
    alert(`mounted, ${this.$el.tagName}`);
  },
  beforeUpdate() {
    alert("beforeUpdated");
  },
  updated() {
    alert("updated");
  },
  beforeDestroy() {
    alert("beforeDestroy");
  },
  destroyed() {
    alert("destroyed");
  }
};
</script>

