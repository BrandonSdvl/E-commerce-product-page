<template lang="pug">
.carousel
  button.carousel__btn.carousel__btn--prev(@click="prev()") <
  .carousel__list
    transition(
      :name="direction",
      mode="in-out",
      v-for="(i, idx) in images",
      :key="idx",
      tag="div"
    )
      img.carousel__item(
        :src="require('../assets/' + i)",
        v-show="idx===visibleSlide"
      )
  button.carousel__btn.carousel__btn--next(@click="next()") >
</template>

<script>
export default {
  name: "Carousel",
  props: {
    images: Array,
  },
  data() {
    return {
      direction: "direction",
      visibleSlide: 0,
    };
  },
  computed: {
    slidesLen() {
      return this.images.length;
    },
  },
  methods: {
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      } else {
        this.visibleSlide--;
      }
      this.direction = "right";
    },
    next() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
      this.direction = "left";
    },
  },
};
</script>
