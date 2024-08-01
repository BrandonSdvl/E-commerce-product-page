<script setup>
import DeleteIcon from "@/assets/icon-delete.svg?component";
import { useStore } from '@/store/index';

const store = useStore();

const props = defineProps({
  amount: {
    type: Number,
    default: 0,
  },
  product: {
    type: Number,
    default: 0,
  },
  idx: {
    type: Number,
    default: 0,
  },
})

const deleteItem = () => {
  store.cart.splice(props.idx, 1);
  localStorage.setItem("cart", JSON.stringify(store.cart));
}

</script>

<template lang="pug">
.cart-item
  img.cart-item__image(
    :src="`/src/assets/${store.products[product].images.thumbnails[0]}`",
    alt="Cart item image"
  )
  .cart-item__details
    span {{ store.products[product].data.postTitle }}
    .cart-item__price
      span ${{ store.products[product].data.netPrice }}
      span &nbsp;x {{ amount }}&nbsp;
      span.cart-item__total ${{ store.products[product].data.netPrice * amount }}
  DeleteIcon(@click="deleteItem()")
</template>
