<script setup>
import IconClose from "../assets/icon-close.svg?component";
import { ref, defineEmits } from 'vue'

const modal = ref(null)

const emit = defineEmits(['closeModal']);

</script>

<template lang="pug">
#modal.modal(ref="modal")
  .modal__content
    IconClose.modal__icon-close(@click="emit('closeModal', modal, 'modal')")
    slot
</template>

