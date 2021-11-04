<template lang="pug">
main
  Images
  Details
</template>

<script>
import Images from "./Images.vue";
import Details from "./Details.vue";

export default {
  name: "Product",
  components: {
    Images,
    Details,
  },
};
</script>
