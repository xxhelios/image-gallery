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
  width: 80%;
  margin: auto;
}
.grid {
  display: grid;
  min-height: calc(317px * 2);
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(2, 50%);
}
@media screen and (max-width: 1300px) {
  .grid {
    min-height: calc(310px * 3);
    grid-template-columns: repeat(3, 33.3%);
    grid-template-rows: repeat(3, 33.3%);
  }
}
@media screen and (max-width: 1000px) {
  .grid {
    min-height: calc(310px * 4);
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(4, 25%);
  }
}
@media screen and (max-width: 650px) {
  .grid {
    min-height: calc(310px * 8);
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(8, 12.5%);
  }
}
.grid-item {
  padding: 15px 10px 5px 10px;
}
</style>