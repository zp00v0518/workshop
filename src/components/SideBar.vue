<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/list">List</router-link>|
    <router-link to="/list_2">List_2</router-link>|
    <router-link to="/ifelse">IfElse</router-link>|
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>