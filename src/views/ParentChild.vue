<template>
  <div>
    <div>
      <button
        v-for="(value, index) in values"
        @click="setGreating(value)"
        :key="index"
      >Send {{value}}</button>
    </div>
    <GetChild :greeting="greeting" />
  </div>
</template>

<script>
import GetChild from "../components/GetChild";

export default {
  name: "ParentChild",
  components: { GetChild },
  data() {
    return {
      greeting: "",
      values: ["Hi", "Salute", "Bon jour"]
    };
  },
  created() {
    const list = ["p-h_4", "p-h_3"];
    this.$store.commit("SET_LIST_IMG", list);
  },
  methods: {
    setGreating(value) {
      this.greeting = value;
    }
  }
};
</script>






