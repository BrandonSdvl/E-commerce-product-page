<template lang="pug">
.cart-item
  img(:src="require('../assets/' + products[product].images.thumbnails[0])")
  .cart-item__details
    span {{ products[product].data.postTitle }}
    .cart-item__price
      span ${{ products[product].data.netPrice }}
      span &nbsp;x {{ amount }}&nbsp;
      span ${{ products[product].data.netPrice * amount }}
  DeleteIcon
</template>

<script>
import DeleteIcon from "../assets/icon-delete.svg";
import { mapState } from "vuex";

export default {
  name: "CartItem",
  components: {
    DeleteIcon,
  },
  computed: {
    ...mapState(["products"]),
  },
  props: {
    amount: Number,
    product: Number,
  },
};
</script>
