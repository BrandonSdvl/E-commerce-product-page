<template lang="pug">
.carousel
  .carousel__btn.carousel__btn--prev(
    @click="prev()",
    :class="modal ? 'modal__btn' : 'carousel__btn'"
  )
    IconPrevious
  .carousel__list-container
    .carousel__list(
      ref="carouselList",
      @drop="dragEnd",
      @dragenter.prevent,
      @dragover.prevent
    )
      div(v-for="(i, idx) in images", :key="idx")
        img.carousel__item(
          :src="require('../assets/' + i)",
          @click="!modal ? handleModal() : ''",
          alt="Product image",
          draggable="true",
          @dragstart="startDrag($event, idx)",
          @dragend="endDrag($event)"
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
  data() {
    return {
      xInitial: 0,
      itemWidth: 0,
      img: new Image(),
    };
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
    dragEnd(e) {
      e.preventDefault();
    },
    startDrag(e, id) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("itemID", id);
      e.dataTransfer.setDragImage(this.img, 1, 1);
      this.xInitial = e.x;
    },
    endDrag(e) {
      if (Math.abs(e.x - this.xInitial) >= 50) {
        if (e.x - this.xInitial > 0) {
          this.prev();
        } else if (e.x - this.xInitial < 0) {
          this.next();
        }
      }
    },
    prev() {
      if (this.slide.visibleSlide <= 0) {
        this.slide.visibleSlide = this.slidesLen - 1;
      } else {
        this.slide.visibleSlide--;
      }
      this.adjustCarousel();
    },
    next() {
      if (this.slide.visibleSlide >= this.slidesLen - 1) {
        this.slide.visibleSlide = 0;
      } else {
        this.slide.visibleSlide++;
      }
      this.adjustCarousel();
    },
    changeImage(idx) {
      if (this.slide.visibleSlide === idx) {
        return;
      } else {
        this.slide.visibleSlide = idx;
        this.adjustCarousel();
      }
    },
    handleModal() {
      const modal = document.getElementById("modal");
      if (!modal.classList.contains("modal--show")) {
        modal.classList.add("modal--show");
      } else {
        modal.classList.remove("modal--show");
      }
    },
    handleResize() {
      this.itemWidth = this.$refs.carouselList.firstElementChild.clientWidth;
      this.adjustCarousel();
    },
    adjustCarousel() {
      this.$refs.carouselList.style.transform = `translateX(-${
        this.itemWidth * this.slide.visibleSlide
      }px)`;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  mounted() {
    this.itemWidth = this.$refs.carouselList.firstElementChild.clientWidth;
    this.img.src = require("../assets/transparent.png");
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
