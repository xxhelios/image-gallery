<template>
  <div id="grid-view">
    <div class="grid">
      <ImageItem
        class="grid-item"
        v-for="image in imagesOnDisplay"
        :key="image.id"
        v-bind:image="image"
      />
    </div>
    <Pager v-if="isLoaded" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ImageItem from "./ImageItem";
import Pager from "./Pager";

export default {
  name: "GridView",
  data() {
    return {
      isLoaded: false,
    };
  },
  components: {
    ImageItem,
    Pager,
  },
  methods: {
    ...mapActions(["fetchImages"]),
  },
  computed: mapGetters(["imagesOnDisplay"]),
  created() {
    this.fetchImages().then(() => (this.isLoaded = true));
  },
};
</script>

<style scoped>
#grid-view {
  margin-top: 40px;
  font-size: 20px;
}
.grid {
  min-height: 580px;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(2, auto);
}
.grid-item {
  padding: 20px;
}
</style>