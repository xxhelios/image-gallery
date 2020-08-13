<template>
  <div id="search-bar">
    <span class="search-label">Search</span>
    <input class="input-box" type="text" @input="searchImages" v-model="keyWords" />
    <span
      class="info-label"
    >Display {{this.filteredImages.length}} of {{this.allImages.length}} images</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SearchBar",
  data() {
    return {
      keyWords: "",
      filteredImages: [],
    };
  },
  methods: {
    ...mapActions(["fetchImages", "showFilteredImages"]),
    searchImages() {
      this.filteredImages = this.allImages.filter((image) => {
        return (
          image.title.toLowerCase().indexOf(this.keyWords.toLowerCase()) > -1
        );
      });
      //Add toLowerCase to make search files non case sensitive.
      this.showFilteredImages(this.filteredImages);
    },
  },
  computed: mapGetters(["allImages"]),
  created() {
    this.fetchImages().then(() => (this.filteredImages = this.allImages));
  },
};
</script>

<style scoped>
#search-bar {
  display: flex;
  margin: auto;
  border-bottom: 2px solid #000000;
  padding: 20px 0;
}
.search-label {
  flex: 1;
  font-size: 20px;
}
.input-box {
  flex: 3;
}
.info-label {
  flex: 3;
  font-size: 20px;
}
</style>