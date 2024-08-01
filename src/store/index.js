import {
  defineStore
} from 'pinia';

export const useStore = defineStore('main', {
  state: () => {
    return {
      cart: [{
        product: 0,
        quantity: 3,
      }, ],
      products: [{
        data: {
          company: "Sneaker Company",
          postTitle: "Fall Limited Edition Sneakers",
          description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
          price: 250,
          discount: 50,
          netPrice: 125,
        },
        images: {
          full: [
            "image-product-1.jpg",
            "image-product-2.jpg",
            "image-product-3.jpg",
            "image-product-4.jpg",
          ],
          thumbnails: [
            "image-product-1-thumbnail.jpg",
            "image-product-2-thumbnail.jpg",
            "image-product-3-thumbnail.jpg",
            "image-product-4-thumbnail.jpg",
          ],
        },
      }, ],
      slide: {
        visibleSlide: 0,
        direction: "left",
      },
    }
  },

  actions: {
    setCart(val) {
      this.cart = val;
    },
  },
});