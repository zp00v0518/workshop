<template>
  <div class="list_item">
    <li :class="index % 2 === 0 ? 'yellow' : 'blue'">{{index}}</li>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: ["index"],
  // created () {
  //   alert(`created  index:${this.index}`)
  // },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.list_item {
  min-width: 30%;
  & .yellow {
    background-color: $main-yellow;
    color: $main-blue
  }
  & .blue {
    background-color: $main-blue;
    color: $main-yellow;
  }
}
</style>



