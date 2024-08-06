<script setup>
import { ref } from 'vue'
import Carousel from "./Carousel.vue";
import { useSlideStore } from '@/store';
import { getImageUrl } from '@/utils/imageUtils';

const slideStore = useSlideStore();

const carousel = ref(null)

const props = defineProps({
  images: Object,
  modal: Boolean,
})

</script>

<template lang="pug">
.images-container
  Carousel(:images="images.full", ref="carousel", :modal="modal")
  .thumbnails
    .thumbnails__item-container(
      v-for="(i, idx) in images.thumbnails",
      @click="carousel.changeImage(idx)",
      :class="idx === slideStore.visibleSlide ? 'thumbnails__item--selected' : ''"
    )
      img.thumbnails__item(
        :src="getImageUrl(i)",
        :key="idx",
        alt="Preview product image"
      )
</template>

