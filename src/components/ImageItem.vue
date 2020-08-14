<template>
  <div id="image-item">
    <DetailView
      v-if="show"
      :key="this.image.id"
      v-bind:image="image"
      v-on:showHide="showHideDetails"
    />
    <img v-bind:src="this.image.url_sq" @click="showDetails" />
    <span>{{ this.image.title }}</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DetailView from "./DetailView";

export default {
  name: "ImageItem",
  props: ["image"],
  data() {
    return {
      show: false,
    };
  },
  components: {
    DetailView,
  },
  methods: {
    ...mapActions(["saveImageDetails"]),
    showDetails() {
      this.show = true;
    },
    showHideDetails(show) {
      this.show = show;
    },
  },
  computed: mapGetters(["showDetailView"]),
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