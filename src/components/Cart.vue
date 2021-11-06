<template lang="pug">
.cart
  template(v-if="cart.length == 0")
    h2 Cart
    span Your cart is empty
  .cart__items(v-else)
    CartItem(
      v-for="(i, idx) in cart",
      :amount="i.quantity",
      :product="i.product",
      :key="idx",
      :idx="idx"
    )
    button Checkout
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
