<script setup>
import IconNext from "../assets/icon-next.svg?component";
import IconPrevious from "../assets/icon-previous.svg?component";
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useSlideStore } from '@/store';
import { getImageUrl } from '@/utils/imageUtils';

const slideStore = useSlideStore();

const xInitial = ref(0);
const itemWidth = ref(0);
const img = ref(new Image());
const carouselList = ref(null);

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  modal: {
    type: Boolean,
    default: false,
  },
});

onMounted(() => {
  window.addEventListener("resize", handleResize);
  itemWidth.value = carouselList.value.clientWidth;
  img.value.src = new URL('../assets/transparent.png', import.meta.url).href;
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

const slidesLen = computed(() => {
  return props.images.length;
});

const startTouch = (e) => {
  xInitial.value = e.changedTouches[0].clientX;
};

const endTouch = (e) => {
  const deltaX = e.changedTouches[0].clientX - xInitial.value;
  if (Math.abs(deltaX) >= 50) {
    deltaX > 0 ? prev() : next();
  }
};

const startDrag = (e, id) => {
  e.dataTransfer.dropEffect = "move";
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("itemID", id);
  e.dataTransfer.setDragImage(img.value, 1, 1);
  xInitial.value = e.x;
};

const endDrag = (e) => {
  const deltaX = e.clientX - xInitial.value;
  if (Math.abs(deltaX) >= 50) {
    deltaX > 0 ? prev() : next();
  }
};

const prev = () => {
  slideStore.setVisibleSlide(slideStore.visibleSlide <= 0 ? slidesLen.value - 1 : slideStore.visibleSlide - 1)
  adjustCarousel();
};

const next = () => {
  slideStore.setVisibleSlide(slideStore.visibleSlide >= slidesLen.value - 1 ? 0 : slideStore.visibleSlide + 1);
  adjustCarousel();
};

const changeImage = (idx) => {
  if (slideStore.visibleSlide !== idx) {
    slideStore.visibleSlide = idx;
    adjustCarousel();
  }
};

const handleModal = () => {
  const modal = document.getElementById("modal");
  modal?.classList.toggle('modal--show');
};

const handleResize = () => {
  if(carouselList.value.clientWidth != itemWidth.value && carouselList.value.clientWidth != 0) {
    itemWidth.value = carouselList.value.clientWidth;
    adjustCarousel();
  }
};

const adjustCarousel = () => {
  slideStore.setTranslateX(itemWidth.value * slideStore.visibleSlide);
};

defineExpose({
  changeImage,
});

</script>

<template lang="pug">
.carousel
  .carousel__btn.carousel__btn--prev(
    @click="prev",
    :class="props.modal ? 'modal__btn' : 'carousel__btn'"
  )
    IconPrevious
  .carousel__list-container
    .carousel__list(
      ref="carouselList",
      :style="{ transform: `translateX(-${slideStore.translateX}px)` }",
      @drop.prevent,
      @dragenter.prevent,
      @dragover.prevent
    )
      div(v-for="(i, idx) in props.images", :key="idx")
        img.carousel__item(
          :src="getImageUrl(i)",
          @click="!props.modal ? handleModal() : null",
          alt="Product image",
          draggable="true",
          @dragstart="startDrag($event, idx)",
          @dragend="endDrag",
          @touchstart="startTouch",
          @touchend="endTouch"
        )
  .carousel__btn.carousel__btn--next(
    @click="next",
    :class="props.modal ? 'modal__btn' : 'carousel__btn'"
  )
    IconNext
</template>
