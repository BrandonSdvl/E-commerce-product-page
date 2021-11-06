<template lang="pug">
#app
  Header
  Product(:selected="selected")
  Modal
    Images(:images="products[selected].images", :modal="true")
</template>

<script>
import Header from "./components/Header.vue";
import Product from "./components/Product.vue";
import Modal from "./components/Modal.vue";
import Images from "./components/Images.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Product,
    Modal,
    Images,
  },
  computed: {
    ...mapState(["products"]),
  },
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    show(el, name) {
      if (!el.classList.contains(`${name}--show`)) {
        el.classList.add(`${name}--show`);
      } else {
        el.classList.remove(`${name}--show`);
      }
    },
  },
};
</script>

<style lang="scss" src="./scss/styles.scss"></style>
