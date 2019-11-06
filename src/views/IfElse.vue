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
  name: "IfElse",
  data() {
    return {
      index: 1
    };
  },
  created() {
    const list = ["if-else"];
    this.$store.commit("SET_LIST_IMG", list);
  }
};
</script>

<style lang="scss" scoped>
.btn {
  margin-top:30px;
  & button {
    font-size: inherit;
  }
}
</style>

