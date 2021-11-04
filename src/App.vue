<template lang="pug">
#app
  Header
  Product(:selected="selected")
</template>

<script>
import Header from "./components/Header.vue";
import Product from "./components/Product.vue";

export default {
  name: "App",
  components: {
    Header,
    Product,
  },
  data() {
    return {
      selected: 0,
    };
  },
};
</script>

<style lang="scss" src="./scss/styles.scss"></style>
