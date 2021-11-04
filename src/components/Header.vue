<template lang="pug">
header.header
  .header__container
    HamburgerIcon.hamburger(@click="show($refs.nav, 'nav')", alt="menu")
    Logo
    nav.nav(ref="nav")
      ul.nav__list
        li.nav__item Collections
        li.nav__item Men
        li.nav__item Women
        li.nav__item About
        li.nav__item Contact
  .header__container
    CartIcon(@click="show($refs.cart.$el, 'cart')")
    img(src="../assets/image-avatar.png", alt="user-image")
  Cart(ref="cart")
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
  methods: {
    show(el, name) {
      if (!el.classList.contains(`${name}--show`)) {
        el.classList.add(`${name}--show`);
      } else {
        el.classList.remove(`${name}--show`);
      }
    },
  },
};
</script>
