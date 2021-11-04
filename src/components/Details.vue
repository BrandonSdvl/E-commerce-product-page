<template lang="pug">
.details
  h2 Sneaker Company
  h1 Fall Limited Edition Sneakers
  p These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.

  .details__price
    span $125.00
    span 50%
    span $250.00

  .detail__amount
    MinusIcon
    span 0
    PlusIcon
  button Add to cart
</template>

<script>
import MinusIcon from "../assets/icon-minus.svg";
import PlusIcon from "../assets/icon-plus.svg";

export default {
  name: "Details",
  components: {
    MinusIcon,
    PlusIcon,
  },
};
</script>
