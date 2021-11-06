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
    MinusIcon(@click="minus()")
    input(v-model="quantity", @change="handleQuantity", type="number")
    PlusIcon(@click="plus()")
  button(@click="addToCart()") Add to cart
</template>

<script>
import MinusIcon from "../assets/icon-minus.svg";
import PlusIcon from "../assets/icon-plus.svg";
import { mapState } from "vuex";

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
  computed: {
    ...mapState(["cart"]),
  },
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    plus() {
      this.quantity++;
    },
    minus() {
      if (this.quantity <= 1) {
        return;
      } else {
        this.quantity--;
      }
    },
    handleQuantity() {
      if (this.quantity < 1) {
        this.quantity = 1;
      }
    },
    addToCart() {
      let created = false;
      this.cart.map((item) => {
        if (item.product === this.selected) {
          created = true;
          item.quantity += this.quantity;
        }
      });
      if (created) {
        return;
      } else {
        let element = {
          product: this.selected,
          quantity: this.quantity,
        };
        this.cart.push(element);
      }
    },
  },
};
</script>
