<template>
  <div id="grid-view">
    <ImageItem class="grid-item" v-for="image in allImages" :key="image.id" v-bind:image="image" />
    <div>pagers</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ImageItem from "./ImageItem";

export default {
  name: "GridView",
  components: {
    ImageItem,
  },
  methods: {
    ...mapActions(["fetchImages"]),
  },
  computed: mapGetters(["allImages"]),
  created() {
    this.fetchImages();
  },
};
</script>

<style scoped>
#grid-view {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  margin-top: 40px;
}
.grid-item {
  padding: 20px;
}
</style>