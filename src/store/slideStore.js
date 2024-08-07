import { defineStore } from 'pinia';

export const useSlideStore = defineStore('slide', {
  state: () => ({
    visibleSlide: 0,
    translateX: 0,
  }),
  actions: {
    setVisibleSlide(slide) {
      this.visibleSlide = slide;
    },
    setTranslateX(x) {
      this.translateX = x;
    },
  },
});
