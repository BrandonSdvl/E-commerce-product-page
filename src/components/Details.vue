<script setup>
import IconMinus from "../assets/icon-minus.svg?component";
import IconPlus from "../assets/icon-plus.svg?component";
import IconCart from "../assets/icon-cart.svg?component";
import { useCartStore, useProductsStore } from '@/store';
import { ref } from 'vue'

const cartStore = useCartStore();
const productsStore = useProductsStore()

const quantity = ref(1)

const props = defineProps({
  selected: Number,
})

const details = productsStore.products[props.selected].data

const plus = () => {
  quantity.value++;
}

const minus = () => {
  if (quantity.value <= 1) {
    return;
  } else {
    quantity.value--;
  }
}

const addToCart = () => {
  cartStore.addItem(props.selected, quantity.value);
  quantity.value = 1;
}

</script>

<template lang="pug">
.details
  p.details__company {{ details.company }}
  h1.details__title {{ details.postTitle }}
  p.details__description {{ details.description }}

  .details__price-container
    template(v-if="details.discount")
      div
        span.details__net-price ${{ productsStore.getNetPrice(selected).toFixed(2) }}
        span.details__discount {{ details.discount + '%' }}
      span.details__price ${{ details.price.toFixed(2) }}
    template(v-else)
      span.details__net-price ${{ details.price.toFixed(2) }}

  .details__add
    .details__quantity
      IconMinus.details__icon-minus(@click="minus()")
      span.details__quantity-selected {{ quantity }}
      IconPlus.details__icon-plus(@click="plus()")
    button.details__button(@click="addToCart()") 
      IconCart.details__icon-cart(fill="#fff")
      | Add to cart
</template>
