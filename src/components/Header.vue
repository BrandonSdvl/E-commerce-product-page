<template lang="pug">
header.header
  .header__container
    IconHamburger.hamburger(@click="$parent.show($refs.nav, 'nav')")
    Logo.header__logo
    nav.nav(ref="nav")
      .nav__container
        IconClose.nav__close-icon(@click="$parent.show($refs.nav, 'nav')")
        ul.nav__list
          li.nav__item Collections
          li.nav__item Men
          li.nav__item Women
          li.nav__item About
          li.nav__item Contact
  .header__container
    .header__cart-icon(@click="$parent.show($refs.cart.$el, 'cart')")
      .header__cart-indicator(v-show="cart.length > 0") {{ totalCartItems }}
      IconCart
    img.header__user-image(src="../assets/image-avatar.png", alt="user-image")
  Cart(ref="cart")
</template>

<script>
import Cart from "./Cart.vue";
import IconHamburger from "../assets/icon-menu.svg?inline";
import Logo from "../assets/logo.svg?inline";
import IconCart from "../assets/icon-cart.svg?inline";
import IconClose from "../assets/icon-close.svg?inline";
import { mapState } from "vuex";

export default {
  name: "Header",
  components: {
    Cart,
    IconHamburger,
    Logo,
    IconCart,
    IconClose,
  },
  computed: {
    ...mapState(["cart"]),
    totalCartItems() {
      let total = 0;
      this.cart.map((item) => (total += item.quantity));
      return total;
    },
  },
};
</script>
