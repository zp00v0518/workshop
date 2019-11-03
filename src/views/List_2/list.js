import ListItem from "../../components/ListItem";

export default {
  name: "List",
  components: { ListItem },
  data() {
    return {
      list: [1, 2, 3]
    };
  },
  created() {
    const list = ["list-1", 'list-2'];
    this.$store.commit("SET_LIST_IMG", list);
  }
};