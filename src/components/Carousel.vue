<template lang="pug">
.carousel
  .carousel__btn.carousel__btn--prev(
    @click="prev()",
    :class="modal ? 'modal__btn' : 'carousel__btn'"
  )
    IconPrevious
  .carousel__list
    transition(
      :name="slide.direction",
      mode="in-out",
      v-for="(i, idx) in images",
      :key="idx",
      tag="div"
    )
      img.carousel__item(
        :src="require('../assets/' + i)",
        v-show="idx===slide.visibleSlide",
        @click="!modal ? handleModal() : ''",
        alt="Product image"
      )
  .carousel__btn.carousel__btn--next(
    @click="next()",
    :class="modal ? 'modal__btn' : 'carousel__btn'"
  )
    IconNext
</template>

<script>
import IconNext from "../assets/icon-next.svg?inline";
import IconPrevious from "../assets/icon-previous.svg?inline";
import { mapState } from "vuex";

export default {
  name: "Carousel",
  props: {
    images: Array,
    modal: Boolean,
  },
  components: {
    IconNext,
    IconPrevious,
  },
  computed: {
    ...mapState(["slide"]),
    slidesLen() {
      return this.images.length;
    },
  },
  methods: {
    prev() {
      if (this.slide.visibleSlide <= 0) {
        this.slide.visibleSlide = this.slidesLen - 1;
      } else {
        this.slide.visibleSlide--;
      }
      this.slide.direction = "right";
    },
    next() {
      if (this.slide.visibleSlide >= this.slidesLen - 1) {
        this.slide.visibleSlide = 0;
      } else {
        this.slide.visibleSlide++;
      }
      this.slide.direction = "left";
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
