<script setup>
import CartItem from "./CartItem.vue";
import { useStore } from '@/store/index';
import { ref } from 'vue'

const store = useStore();

const root = ref(null);

defineExpose({
  root
});

</script>

<template lang="pug">
.cart(ref="root")
  h2.cart__title Cart
  template(v-if="store.cart.length == 0")
    .cart__message Your cart is empty
  .cart__items(v-else)
    CartItem(
      v-for="(i, idx) in store.cart",
      :amount="i.quantity",
      :product="i.product",
      :key="idx",
      :idx="idx"
    )
    button.cart__button Checkout
</template>
