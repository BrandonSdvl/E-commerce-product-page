<script setup>
import CartItem from "./CartItem.vue";
import { useCartStore } from '@/store';
import { ref } from 'vue'

const cartStore = useCartStore();

const root = ref(null);

defineExpose({
  root
});

</script>

<template lang="pug">
.cart(ref="root")
  h2.cart__title Cart
  template(v-if="cartStore.getTotalCartItems == 0")
    .cart__message Your cart is empty
  .cart__items(v-else)
    CartItem(
      v-for="(i, idx) in cartStore.cart",
      :amount="i.quantity",
      :productId="i.productId",
      :key="i.productId",
    )
  button.cart__button Checkout
</template>
