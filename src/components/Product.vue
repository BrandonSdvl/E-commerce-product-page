<script setup>
import Images from "./Images.vue";
import Details from "./Details.vue";
import { useStore } from '@/store/index';

const store = useStore();

const props = defineProps({
  selected: {
    type: Number,
    default: 0,
  }
})

</script>

<template lang="pug">
main.product
  Images(:images="store.products[selected].images", :modal="false")
  Details(:details="store.products[selected].data", :selected="selected")
</template>
