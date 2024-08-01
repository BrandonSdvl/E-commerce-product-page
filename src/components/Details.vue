<script setup>
import IconMinus from "../assets/icon-minus.svg?component";
import IconPlus from "../assets/icon-plus.svg?component";
import IconCart from "../assets/icon-cart.svg?component";
import { useStore } from '@/store/index';
import { ref, onMounted } from 'vue'

const store = useStore();

const quantity = ref(1)

onMounted(() => {
  if (localStorage.getItem("cart")) {
    store.setCart(JSON.parse(localStorage.getItem("cart")));
  } else {
    saveCart();
  }
})

const props = defineProps({
  details: Object,
  selected: Number,
})

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
  let created = false;
  store.cart.map((item) => {
    if (item.product === props.selected) {
      created = true;
      item.quantity += quantity.value;
    }
  });
  if (created) {
    quantity.value = 1;
    saveCart();
    alert("Product added to cart");
    return;
  } else {
    let element = {
      product: props.selected,
      quantity: quantity.value,
    };
    store.cart.push(element);
    quantity.value = 1;
    saveCart();
    alert("Product added to cart");
  }
}

const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(store.cart));
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
