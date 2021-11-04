<template lang="pug">
.cart-item
  img(src="../assets/image-product-1-thumbnail.jpg")
  .cart-item__details
    span Fall Limited Edition Sneakers
    .cart-item__price
      span $125.00
      span &nbsp;x 3&nbsp;
      span $375.00
  DeleteIcon
</template>

<script>
import DeleteIcon from "../assets/icon-delete.svg";

export default {
  name: "CartItem",
  components: {
    DeleteIcon,
  },
};
</script>
