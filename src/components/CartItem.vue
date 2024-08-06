<script setup>
import DeleteIcon from "@/assets/icon-delete.svg?component";
import { useCartStore, useProductsStore } from '@/store';
import { getImageUrl } from '@/utils/imageUtils';

const cartStore = useCartStore();
const productsStore = useProductsStore();

const props = defineProps({
  amount: {
    type: Number,
    default: 0,
  },
  productId: {
    type: Number,
    default: 0,
  },
})

const currItem = productsStore.products[props.productId]

</script>

<template lang="pug">
.cart-item
  img.cart-item__image(
    :src="getImageUrl(currItem.images.thumbnails[0])",
    alt="Cart item image"
  )
  .cart-item__details
    span {{ currItem.data.postTitle }}
    .cart-item__price
      span ${{ productsStore.getNetPrice(productId) }}
      span &nbsp;x {{ amount }}&nbsp;
      span.cart-item__total ${{ productsStore.getNetPrice(productId) * amount }}
  DeleteIcon(@click="cartStore.deleteItem(productId)")
</template>
