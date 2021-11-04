<template lang="pug">
.images-container
  img.images-container__large-image(
    :src="require('../assets/' + images[imageSelected][0])"
  )
  .images-container__thumbnails
    img(
      v-for="(i, idx) in images",
      :src="require('../assets/' + i[1])",
      :key="idx"
    )
</template>

<script>
export default {
  name: "Images",
  props: {
    images: Array,
  },
  data() {
    return {
      imageSelected: 0,
    };
  },
};
</script>
