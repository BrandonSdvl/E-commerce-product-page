<script setup>
import IconClose from "../assets/icon-close.svg?component";
import { ref } from 'vue'

const modal = ref(null)

</script>

<template lang="pug">
#modal.modal(ref="modal", @click.self="modal.classList.toggle('modal--show')")
  .modal__content
    IconClose.modal__icon-close(@click="modal.classList.toggle('modal--show')")
    slot
</template>

