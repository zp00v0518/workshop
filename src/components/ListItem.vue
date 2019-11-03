<template>
  <div>
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
li{
  &.yellow{
    background-color: yellow;
  }
  &.blue{
    background-color: blue;
  }
}
</style>