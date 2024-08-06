<script setup>
import Header from "@/components/Header.vue";
import Modal from "@/components/Modal.vue";
import Images from "@/components/Images.vue";
import Details from "@/components/Details.vue";
import Footer from "@/components/Footer.vue";
import { ref } from 'vue'
import { useProductsStore } from '@/store';

const productsStore = useProductsStore();
const selected = ref(0);

</script>

<template lang="pug">
#app
  Header
  main.product
    Images(:images="productsStore.getProductById(selected).images", :modal="false")
    Details(:selected="selected")
  Modal
    Images(:images="productsStore.getProductById(selected).images", :modal="true")
  Footer
</template>

<style lang="scss" src="./scss/styles.scss"></style>
