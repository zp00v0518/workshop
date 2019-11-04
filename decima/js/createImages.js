const div = document.createElement('div');
div.setAttribute('id', 'images');
document.body.appendChild(div);

const ImgItem = Vue.component('img-item', {
  props: ['url'],
  template: `<img :src="fullUrl" class="images__item"/>`,
  data() {
    return {
      folder: 'images'
    };
  },
  computed: {
    fullUrl() {
      return `${this.folder}/${this.url}.png`;
    }
  }
});

const app2 = new Vue({
  el: '#images',
  components: { ImgItem },
  template: `
    <div id="images">
      <ImgItem v-for="(url, index) in listImg" :url="url"/> 
    </div>
    `,
  data() {
    return {
      listImg
    };
  }
});
