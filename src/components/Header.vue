<template lang="pug">
header.header
  .header__container
    HamburgerIcon.hamburger
    nav.nav
      ul.nav__list
        li.nav__item Collections
        li.nav__item Men
        li.nav__item Women
        li.nav__item About
        li.nav__item Contact
    Logo
  .header__container
    CartIcon
    img(src="../assets/image-avatar.png")
  Cart
</template>

<script>
import Cart from "./Cart.vue";
import HamburgerIcon from "../assets/icon-menu.svg";
import Logo from "../assets/logo.svg";
import CartIcon from "../assets/icon-cart.svg";

export default {
  name: "Header",
  components: {
    Cart,
    HamburgerIcon,
    Logo,
    CartIcon,
  },
};
</script>
