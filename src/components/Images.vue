<template lang="pug">
.images-container
  Carousel(:images="images.full", ref="carousel", :modal="modal")
  .thumbnails
    img.thumbnails__item(
      v-for="(i, idx) in images.thumbnails",
      :src="require(`../assets/${i}`)",
      :key="idx",
      @click="changeImage(idx)"
    )
</template>

<script>
import Carousel from "./Carousel.vue";

export default {
  name: "Images",
  props: {
    images: Object,
    modal: Boolean,
  },
  components: {
    Carousel,
  },
  methods: {
    changeImage(idx) {
      if (this.$refs.carousel.visibleSlide === idx) {
        return;
      } else if (this.$refs.carousel.visibleSlide < idx) {
        this.$refs.carousel.visibleSlide = idx;
        this.$refs.carousel.direction = "left";
      } else if (this.$refs.carousel.visibleSlide > idx) {
        this.$refs.carousel.visibleSlide = idx;
        this.$refs.carousel.direction = "right";
      }
    },
  },
};
</script>
