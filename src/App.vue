<template>
  <div id="app">
    <div class="content">
      <SideBar />
      <router-view />
    </div>
    <Images/>
  </div>
</template>

<script>
import SideBar from "./components/SideBar";
import Images from "./components/Images";
export default {
  name: "App",
  components: { SideBar, Images }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
}
.content{
  flex-grow: 3;
  display: flex;
  flex-direction: column;
  width: 30%;
  font-size: 40px;
}
</style>
