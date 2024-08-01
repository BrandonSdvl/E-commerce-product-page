<script setup>
import Cart from "./Cart.vue";
import IconHamburger from "@/assets/icon-menu.svg?component";
import Logo from "@/assets/logo.svg?component";
import IconCart from "@/assets/icon-cart.svg?component";
import IconClose from "@/assets/icon-close.svg?component";
import { useStore } from '@/store/index';
import { ref } from 'vue'

const store = useStore();

const emit = defineEmits(['show']);

const nav = ref(null)
const cart = ref(null)

const totalCartItems = () => {
  let total = 0;
  store.cart.map((item) => (total += item.quantity));
  return total;
}

</script>

<template lang="pug">
header.header
  .header__container
    IconHamburger.hamburger(@click="emit('show', nav, 'nav')")
    Logo.header__logo
    nav.nav(ref="nav")
      .nav__container
        IconClose.nav__close-icon(@click="emit('show', nav, 'nav')")
        ul.nav__list
          li.nav__item Collections
          li.nav__item Men
          li.nav__item Women
          li.nav__item About
          li.nav__item Contact
  .header__container
    .header__cart-icon(@click="emit('show', cart.root, 'cart')")
      .header__cart-indicator(v-show="store.cart.length > 0") {{ totalCartItems() }}
      IconCart
    img.header__user-image(src="../assets/image-avatar.png", alt="user-image")
  Cart(ref="cart")
</template>
