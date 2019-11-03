<template>
  <div class="images" :style="{width: imgList.length > 0 ? '70%': 'auto'}">
    <img v-for="(url, index) in imgList" :src="getFullUrl(url)" :key="index" />
  </div>
</template>

<script>
export default {
  name: "Images",
  computed: {
    imgList() {
      return this.$store.state.imgList;
    }
  },
  methods: {
    getFullUrl(name) {
      return `../img/${name}.png`;
    }
  }
};
</script>

<style lang="scss" scoped>
.images {
  display: flex;
  flex-direction: column;
  width: 70%;
  & img {
    width: 100%;
    margin-bottom: 30px;
  }
}
</style>
