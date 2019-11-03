<template>
  <div>
    <input type="text" v-model="value" />
    <div>{{turn}}</div>
    <input type="text" :value='value' @input="value = $event.target.value">
  </div>
</template>

<script>
export default {
  name: "Computed",
  data() {
    return {
      value: ""
    };
  },
  computed: {
    turn() {
      return Array.from(this.value).reverse().join('');
    }
  }
};
</script>