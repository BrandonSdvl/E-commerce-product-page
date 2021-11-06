<template lang="pug">
.carousel
  button.carousel__btn--prev(
    @click="prev()",
    :class="modal ? 'modal__btn' : 'carousel__btn'"
  ) <
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
        v-show="idx===visibleSlide",
        @click="!modal ? handleModal() : ''"
      )
  button.carousel__btn--next(
    @click="next()",
    :class="modal ? 'modal__btn' : 'carousel__btn'"
  ) >
</template>

<script>
export default {
  name: "Carousel",
  props: {
    images: Array,
    modal: Boolean,
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
    handleModal() {
      const modal = document.getElementById("modal");
      if (!modal.classList.contains("modal--show")) {
        modal.classList.add("modal--show");
      } else {
        modal.classList.remove("modal--show");
      }
    },
  },
};
</script>
