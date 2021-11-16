<template lang="pug">
.details
  h2.details__company {{ details.company }}
  h1.details__title {{ details.postTitle }}
  p.details__description {{ details.description }}

  .details__price-container
    template(v-if="details.discount")
      div
        span.details__net-price ${{ details.netPrice.toFixed(2) }}
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

<script>
import IconMinus from "../assets/icon-minus.svg?inline";
import IconPlus from "../assets/icon-plus.svg?inline";
import IconCart from "../assets/icon-cart.svg?inline";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Details",
  components: {
    IconMinus,
    IconPlus,
    IconCart,
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
    ...mapMutations(["setCart"]),
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
    addToCart() {
      let created = false;
      this.cart.map((item) => {
        if (item.product === this.selected) {
          created = true;
          item.quantity += this.quantity;
        }
      });
      if (created) {
        this.quantity = 1;
        this.saveCart();
        alert("Product added to cart");
        return;
      } else {
        let element = {
          product: this.selected,
          quantity: this.quantity,
        };
        this.cart.push(element);
        this.quantity = 1;
        this.saveCart();
        alert("Product added to cart");
      }
    },
    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
  mounted() {
    if (localStorage.getItem("cart")) {
      this.setCart(JSON.parse(localStorage.getItem("cart")));
    } else {
      this.saveCart();
    }
  },
};
</script>
