<template>
  <div>Vuex page</div>
</template>

<script>
export default {
  name: "VuexPage",
  created() {
    const list = ["store_1", 'store_3', 'store_2'];
    this.$store.commit("SET_LIST_IMG", list);
  }
};
</script>



