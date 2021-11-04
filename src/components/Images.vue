<template lang="pug">
.images-container
  img.images-container__large-image(src="../assets/image-product-1.jpg")
  .images-container__thumbnails
    img(src="../assets/image-product-1-thumbnail.jpg")
    img(src="../assets/image-product-2-thumbnail.jpg")
    img(src="../assets/image-product-3-thumbnail.jpg")
    img(src="../assets/image-product-4-thumbnail.jpg")
</template>

<script>
export default {
  name: "Images",
};
</script>
