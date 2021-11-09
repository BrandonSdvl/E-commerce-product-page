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
    CartIcon(@click="$parent.show($refs.cart.$el, 'cart')")
    img.header__user-image(src="../assets/image-avatar.png", alt="user-image")
  Cart(ref="cart")
</template>

<script>
import Cart from "./Cart.vue";
import HamburgerIcon from "../assets/icon-menu.svg";
import Logo from "../assets/logo.svg";
import CartIcon from "../assets/icon-cart.svg";
import CloseIcon from "../assets/icon-close.svg";

export default {
  name: "Header",
  components: {
    Cart,
    HamburgerIcon,
    Logo,
    CartIcon,
    CloseIcon,
  },
};
</script>
