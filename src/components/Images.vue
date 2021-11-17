<template lang="pug">
.images-container
  Carousel(:images="images.full", ref="carousel", :modal="modal")
  .thumbnails
    .thumbnails__item-container(
      v-for="(i, idx) in images.thumbnails",
      @click="changeImage(idx)",
      :class="idx === slide.visibleSlide ? 'thumbnails__item--selected' : ''"
    )
      img.thumbnails__item(
        :src="require(`../assets/${i}`)",
        :key="idx",
        alt="Preview product image"
      )
</template>

<script>
import Carousel from "./Carousel.vue";
import { mapState } from "vuex";

export default {
  name: "Images",
  props: {
    images: Object,
    modal: Boolean,
  },
  components: {
    Carousel,
  },
  computed: {
    ...mapState(["slide"]),
  },
  methods: {
    changeImage(idx) {
      if (this.slide.visibleSlide === idx) {
        return;
      } else if (this.slide.visibleSlide < idx) {
        this.slide.visibleSlide = idx;
        this.slide.direction = "left";
      } else if (this.slide.visibleSlide > idx) {
        this.slide.visibleSlide = idx;
        this.slide.direction = "right";
      }
    },
  },
};
</script>
