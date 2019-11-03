import ListItem from "../../components/ListItem";

export default {
  name: "List_2",
  components: { ListItem },
  data() {
    return {
      list: [1, 2, 3]
    };
  },
  created() {
    const list = ["list-2-2", 'list-2-1'];
    this.$store.commit("SET_LIST_IMG", list);
  }
};