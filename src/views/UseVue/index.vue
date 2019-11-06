<template>
  <div class="logos swiper-inner">
    <!-- <img class="logos__item" :src="item" alt v-for="(item, index) in logos" :key="index" /> -->
    <swiper :options="swiperOption" ref="swiperInst">
      <swiper-slide class="logos__item" :src="item" alt v-for="(item, index) in logos" :key="index">
        <img :src="item" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import logos from "./logos";
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      logos,
      swiperOption: {
        effect: "cube",
        grabCursor: true,
        loop: true,
        speed: 700,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        autoplay: {
          delay: 800,
          disableOnInteraction: false
        }
      }
    };
  },
  created() {
    this.$store.commit("SET_LIST_IMG", []);
  },
  computed: {
    swiperInst() {
      return this.$refs.swiperInst.swiper;
    }
  },

};
</script>

<style lang="scss">
// .logos {
//   &__item {
//     width: 200px;
//     height: 100px;
//     margin: 15px;
//     & > img{
//       width: 80%;
//     }
//   }
// }
.swiper-inner {
  position: relative;
  overflow: hidden;
  height: 330px;
  padding: 15px;
}
.swiper-container {
  width: 300px !important;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    max-width: 90%;
    min-height: 50%;
  }
}
</style>