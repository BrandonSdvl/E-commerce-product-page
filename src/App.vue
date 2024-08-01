<script setup>
import Header from "@/components/Header.vue";
import Product from "@/components/Product.vue";
import Modal from "@/components/Modal.vue";
import Images from "@/components/Images.vue";
import Footer from "@/components/Footer.vue";
import { useStore } from '@/store/index';
import { ref } from 'vue'

const selected = ref(0);

const store = useStore();

const show = (el, name) => {
  if (!el.classList.contains(`${name}--show`)) {
    el.classList.add(`${name}--show`);
  } else {
    el.classList.remove(`${name}--show`);
  }
}

</script>

<template lang="pug">
#app
  Header(@show="show")
  Product(:selected="selected")
  Modal(@closeModal="show")
    Images(:images="store.products[selected].images", :modal="true")
  Footer
</template>

<style lang="scss" src="./scss/styles.scss"></style>
