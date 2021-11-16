<template lang="pug">
.cart-item
  img.cart-item__image(
    :src="require('../assets/' + products[product].images.thumbnails[0])"
  )
  .cart-item__details
    span {{ products[product].data.postTitle }}
    .cart-item__price
      span ${{ products[product].data.netPrice }}
      span &nbsp;x {{ amount }}&nbsp;
      span.cart-item__total ${{ products[product].data.netPrice * amount }}
  DeleteIcon(@click="deleteItem()")
</template>

<script>
import DeleteIcon from "../assets/icon-delete.svg?inline";
import { mapState } from "vuex";

export default {
  name: "CartItem",
  components: {
    DeleteIcon,
  },
  computed: {
    ...mapState(["products", "cart"]),
  },
  props: {
    amount: Number,
    product: Number,
    idx: Number,
  },
  methods: {
    deleteItem() {
      this.cart.splice(this.idx, 1);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
};
</script>
