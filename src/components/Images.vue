<script setup>
import { ref } from 'vue'
import Carousel from "./Carousel.vue";
import { useStore } from '@/store/index';

const store = useStore();

const carousel = ref(null)

const props = defineProps({
  images: Object,
  modal: Boolean,
})

const imgImport = import.meta.glob('/src/assets/*.jpg', { eager: true });

// Función para obtener la URL de la imagen
const getImageUrl = (imageName) => {
  const image = imgImport[`/src/assets/${imageName}`];
  return image ? image.default : '';
};

</script>

<template lang="pug">
.images-container
  Carousel(:images="props.images.full", ref="carousel", :modal="modal")
  .thumbnails
    .thumbnails__item-container(
      v-for="(i, idx) in images.thumbnails",
      @click="carousel.changeImage(idx)",
      :class="idx === store.slide.visibleSlide ? 'thumbnails__item--selected' : ''"
    )
      img.thumbnails__item(
        :src="getImageUrl(i)",
        :key="idx",
        alt="Preview product image"
      )
</template>

