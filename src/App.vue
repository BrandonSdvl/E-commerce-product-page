<template lang="pug">
#app
  Header
  Product
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
};
</script>

<style lang="scss" src="./scss/styles.scss"></style>
