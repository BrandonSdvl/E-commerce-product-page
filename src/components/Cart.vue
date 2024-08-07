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
  .cart__message(v-if="cartStore.getTotalCartItems == 0") Your cart is empty
  template(v-else)
    .cart__items
      CartItem(
        v-for="(i, idx) in cartStore.cart",
        :amount="i.quantity",
        :productId="i.productId",
        :key="i.productId",
      )
    button.cart__button Checkout
</template>
