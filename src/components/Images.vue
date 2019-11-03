<template>
  <div>
    <img v-for="(url, index) in imgList" :src="url" :key="index"/>
  </div>
</template>

<script>
  export default {
    name: 'Images',
    computed: {
      imgList() {
        return this.$store.state.imgList;
      }
    },
  }
</script>
