<template lang="pug">
header.header
  .header__container
    HamburgerIcon.hamburger(
      @click="$parent.show($refs.nav, 'nav')",
      alt="menu"
    )
    Logo.header__logo
    nav.nav(ref="nav")
      .nav__container
        CloseIcon.nav__close-icon(@click="$parent.show($refs.nav, 'nav')")
        ul.nav__list
          li.nav__item Collections
          li.nav__item Men
          li.nav__item Women
          li.nav__item About
          li.nav__item Contact
  .header__container
    #header__cart-icon.header__cart-icon.header__cart-icon(
      @click="$parent.show($refs.cart.$el, 'cart')"
    )
      .header__cart-indicator(v-show="cart.length > 0") {{ totalCartItems }}
      CartIcon
    img.header__user-image(src="../assets/image-avatar.png", alt="user-image")
  Cart(ref="cart")
</template>

<script>
import Cart from "./Cart.vue";
import HamburgerIcon from "../assets/icon-menu.svg?inline";
import Logo from "../assets/logo.svg?inline";
import CartIcon from "../assets/icon-cart.svg?inline";
import CloseIcon from "../assets/icon-close.svg?inline";
import { mapState } from "vuex";

export default {
  name: "Header",
  components: {
    Cart,
    HamburgerIcon,
    Logo,
    CartIcon,
    CloseIcon,
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
