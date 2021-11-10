<template lang="pug">
.cart
  h2.cart__title Cart
  template(v-if="cart.length == 0")
    .cart__message Your cart is empty
  .cart__items(v-else)
    CartItem(
      v-for="(i, idx) in cart",
      :amount="i.quantity",
      :product="i.product",
      :key="idx",
      :idx="idx"
    )
    button.cart__button Checkout
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapState } from "vuex";

export default {
  name: "Cart",
  components: {
    CartItem,
  },
  computed: {
    ...mapState(["cart", "products"]),
  },
};
</script>
