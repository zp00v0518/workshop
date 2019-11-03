<template>
  <div>Dynamically loaded page</div>
</template>

<script>
export default {
    created() {
    const list = ["template", 'router_1'];
    this.$store.commit("SET_LIST_IMG", list);
  },
};
</script>