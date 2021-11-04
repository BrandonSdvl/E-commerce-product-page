<template lang="pug">
.cart
  h2 Cart
  span Your cart is empty
  .cart__items
    CartItem
  button Checkout
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  name: "Cart",
  components: {
    CartItem,
  },
};
</script>
