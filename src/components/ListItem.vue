<template>
  <div class="list_item">
    <li :class="index % 2 === 0 ? 'yellow' : 'blue'">{{index}}</li>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: ["index"]
};
</script>

<style lang="scss" scoped>
.list_item {
  min-width: 30%;
  & .yellow {
    background-color: yellow;
  }
  & .blue {
    background-color: blue;
  }
}
</style>



