<template lang="pug">
#modal.modal(ref="modal")
  CloseIcon(@click="$parent.show($refs.modal, 'modal')")
  slot
</template>

<script>
import CloseIcon from "../assets/icon-close.svg";

export default {
  name: "Modal",
  components: {
    CloseIcon,
  },
};
</script>
