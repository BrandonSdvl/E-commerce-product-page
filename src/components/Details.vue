<template lang="pug">
.details
  h2 {{ details.company }}
  h1 {{ details.postTitle }}
  p {{ details.description }}

  .details__price
    template(v-if="details.discount")
      span {{ details.netPrice.toFixed(2) }}
      span {{ details.discount + '%' }}
      span {{ details.price.toFixed(2) }}
    template(v-else)
      span {{ details.price.toFixed(2) }}

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
  props: {
    details: Object,
    selected: Number,
  },
};
</script>
