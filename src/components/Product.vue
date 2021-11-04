<template lang="pug">
main
  Images(:images="products[selected].images")
  Details(:details="products[selected].data", :selected="selected")
</template>

<script>
import Images from "./Images.vue";
import Details from "./Details.vue";
import { mapState } from "vuex";

export default {
  name: "Product",
  components: {
    Images,
    Details,
  },
  props: {
    selected: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapState(["products"]),
  },
  created() {},
};
</script>
