<template>
  <div id="image-item">
    <DetailView
      v-if="show"
      :key="this.image.id"
      v-bind:image="image"
      v-on:showHide="showHideDetails"
    />
    <img v-bind:src="createImage" @click="showDetails" @error="imageError=true" />
    <span>{{ this.image.title }}</span>
  </div>
</template>

<script>
import DetailView from "./DetailView";

export default {
  name: "ImageItem",
  props: ["image"],
  data() {
    return {
      show: false,
      imageError: false,
    };
  },
  components: {
    DetailView,
  },
  methods: {
    showDetails() {
      this.show = true;
    },
    showHideDetails(show) {
      this.show = show;
    },
  },
  computed: {
    createImage() {
      return this.imageError ? "./default.jpg" : this.image.url_m;
    },
  },
};
//TODO: hide images that have bad url
</script>

<style scoped>
img {
  width: 250px;
  height: 250px;
}
span {
  display: block;
  font-size: 20px;
  height: 40px;
  line-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>