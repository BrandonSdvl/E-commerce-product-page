<script setup>
import IconNext from "../assets/icon-next.svg?component";
import IconPrevious from "../assets/icon-previous.svg?component";
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useSlideStore } from '@/store';

const slideStore = useSlideStore();

const xInitial = ref(0)
const itemWidth = ref(0)
const img = ref(new Image())
const carouselList = ref(null)

const props = defineProps({
  images: Array,
  modal: Boolean,
})

onMounted(() => {
  window.addEventListener("resize", handleResize);
  itemWidth.value = carouselList.value.firstElementChild.clientWidth;
  img.value.src = new URL('../assets/transparent.png', import.meta.url).href;
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

const slidesLen = computed(() => {
  return props.images.length;
})

const drop = (e) => {
  e.preventDefault();
}

const startTouch = (e) => {
  xInitial.value = e.changedTouches[0].clientX;
}

const endTouch = (e) => {
  if (Math.abs(e.changedTouches[0].clientX - xInitial) >= 50) {
    if (e.changedTouches[0].clientX - xInitial > 0) {
      prev();
    } else if (e.changedTouches[0].clientX - xInitial < 0) {
      next();
    }
  }
}

const startDrag = (e, id) => {
  e.dataTransfer.dropEffect = "move";
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("itemID", id);
  e.dataTransfer.setDragImage(img.value, 1, 1);
  xInitial.value = e.x;
}

const endDrag = (e) => {
  if (Math.abs(e.x - xInitial) >= 50) {
    if (e.x - xInitial > 0) {
      prev();
    } else if (e.x - xInitial < 0) {
      next();
    }
  }
}

const prev = () => {
  if (slideStore.visibleSlide <= 0) {
    slideStore.visibleSlide = slidesLen.value - 1;
  } else {
    slideStore.visibleSlide--;
  }
  adjustCarousel();
}

const next = () => {
  if (slideStore.visibleSlide >= slidesLen.value - 1) {
    slideStore.visibleSlide = 0;
  } else {
    slideStore.visibleSlide++;
  }
  adjustCarousel();
}

const changeImage = (idx) => {
  if (slideStore.visibleSlide === idx) {
    return;
  } else {
    slideStore.visibleSlide = idx;
    adjustCarousel();
  }
}

const handleModal = () => {
  const modal = document.getElementById("modal");
  modal.classList.toggle('modal--show')
}

const handleResize = () => {
  itemWidth.value = carouselList.value.firstElementChild.clientWidth;
  adjustCarousel();
}

const adjustCarousel = () => {
  carouselList.value.style.transform = `translateX(-${itemWidth.value * slideStore.visibleSlide
    }px)`;
}

const imgImport = import.meta.glob('/src/assets/*.jpg', { eager: true });

const getImageUrl = (imageName) => {
  const image = imgImport[`/src/assets/${imageName}`];
  return image ? image.default : '';
};


defineExpose({
  changeImage
})

</script>

<template lang="pug">
.carousel
  .carousel__btn.carousel__btn--prev(
    @click="prev()",
    :class="props.modal ? 'modal__btn' : 'carousel__btn'"
  )
    IconPrevious
  .carousel__list-container
    .carousel__list(
      ref="carouselList",
      @drop="drop",
      @dragenter.prevent,
      @dragover.prevent
    )
      div(v-for="(i, idx) in props.images", :key="idx")
        img.carousel__item(
          :src="getImageUrl(i)",
          @click="!props.modal ? handleModal() : ''",
          alt="Product image",
          draggable="true",
          @dragstart="startDrag($event, idx)",
          @dragend="endDrag($event)",
          @touchstart="startTouch($event)",
          @touchend="endTouch($event)"
        )
  .carousel__btn.carousel__btn--next(
    @click="next()",
    :class="props.modal ? 'modal__btn' : 'carousel__btn'"
  )
    IconNext
</template>
