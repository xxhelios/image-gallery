<template>
  <div id="image-item">
    <img v-bind:src="this.image.url_sq" alt />
    <span>{{ this.image.title }}</span>
  </div>
</template>

<script>
export default {
  name: "ImageItem",
  props: ["image"],
};
//TODO: hide images that have bad url
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
span {
  display: block;
  font-size: 20px;
  height: 40px;
  line-height: 20px;
}
</style>