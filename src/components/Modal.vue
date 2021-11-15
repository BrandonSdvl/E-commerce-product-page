<template lang="pug">
#modal.modal(ref="modal")
  .modal__content
    IconClose.modal__icon-close(@click="$parent.show($refs.modal, 'modal')")
    slot
</template>

<script>
import IconClose from "../assets/icon-close.svg?inline";

export default {
  name: "Modal",
  components: {
    IconClose,
  },
};
</script>
