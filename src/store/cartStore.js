import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [
      {
        productId: 0,
        quantity: 3,
      },
    ],
  }),
  getters: {
    getTotalCartItems: (state) => {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
  },
  actions: {
    setCart(val) {
      this.cart = val;
      this.saveCart();
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    addItem(productId, quantity) {
      let created = false;
      this.cart.forEach((item) => {
        if (item.productId === productId) {
          created = true;
          item.quantity += quantity;
        }
      });
      if (!created) {
        this.cart.push({ productId, quantity });
      }
      this.saveCart();
      alert("Product added to cart");
    },
    deleteItem(productId) {
      const index = this.cart.findIndex(item => item.productId === productId);
      if (index !== -1) {
        this.cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }
    },
  },
});
