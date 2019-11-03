<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/list">List</router-link>
    <router-link to="/list_2">List_2</router-link>
    <router-link to="/ifelse">IfElse</router-link>
    <router-link to="/computed">Computed</router-link>
    <router-link to="/hooks">Hooks</router-link>
    <router-link to="/dynamic">Dynamic</router-link>
    <router-link to="/vuex">Vuex</router-link>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 18px;
    margin: 5px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>