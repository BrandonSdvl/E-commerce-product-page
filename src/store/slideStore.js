import { defineStore } from 'pinia';

export const useSlideStore = defineStore('slide', {
  state: () => ({
    visibleSlide: 0,
    direction: "left",
  }),
});
