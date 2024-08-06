<script setup>
import Cart from "./Cart.vue";
import IconHamburger from "@/assets/icon-menu.svg?component";
import Logo from "@/assets/logo.svg?component";
import IconCart from "@/assets/icon-cart.svg?component";
import IconClose from "@/assets/icon-close.svg?component";
import { useCartStore } from '@/store';
import { ref } from 'vue'

const cartStore = useCartStore();

const nav = ref(null)
const cart = ref(null)

</script>

<template lang="pug">
header.header
  .header__container
    IconHamburger.hamburger(@click="nav.classList.toggle('nav--show')")
    Logo.header__logo
    nav.nav(ref="nav", @click.self="nav.classList.toggle('nav--show')")
      .nav__container
        IconClose.nav__close-icon(@click="nav.classList.toggle('nav--show')")
        ul.nav__list
          li.nav__item Collections
          li.nav__item Men
          li.nav__item Women
          li.nav__item About
          li.nav__item Contact
  .header__container
    .header__cart-icon(@click="cart.root.classList.toggle('cart--show')")
      .header__cart-indicator(v-show="cartStore.cart.length > 0") {{ cartStore.getTotalCartItems }}
      IconCart
    img.header__user-image(src="../assets/image-avatar.png", alt="user-image")
  Cart(ref="cart")
</template>
