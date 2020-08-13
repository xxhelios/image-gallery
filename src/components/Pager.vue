<template>
  <div class="pager">
    <button class="fas fa-caret-left large" v-on:click="goToStart"></button>
    <button class="fas fa-chevron-left small" v-on:click="pageLeft" :disabled="!!disablePageLeft"></button>
    <input type="text" :placeholder="currentPage" />
    <span>of</span>
    <span>{{ this.totalPages }}</span>
    <button
      class="fas fa-chevron-right small"
      v-on:click="pageRight"
      :disabled="!!disablePageRight"
    ></button>
    <button class="fas fa-caret-right large" v-on:click="goToEnd"></button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Pager",
  data() {
    return {
      totalPages: "",
      currentPage: "",
      disablePageLeft: true,
      disablePageRight: false,
    };
  },
  methods: {
    ...mapActions(["fetchImages", "updateImages"]),
    goToStart() {
      this.updateImages(0);
      this.currentPage = 1;
      this.disablePageLeft = this.currentPage === 1;
      this.disablePageRight = this.currentPage === this.totalPages;
    },
    goToEnd() {
      const lastPage = this.totalPages;
      this.updateImages(lastPage * 8 - 8);
      this.currentPage = lastPage;
      this.disablePageLeft = this.currentPage === 1;
      this.disablePageRight = this.currentPage === this.totalPages;
    },
    goToPage() {},
    //TODO: refactor pager functions
    pageLeft() {
      const previousPage = this.currentPage - 1;
      const indexFrom = (previousPage - 1) * 8;
      this.updateImages(indexFrom);
      this.currentPage = previousPage;
      this.disablePageLeft = this.currentPage === 1;
      this.disablePageRight = this.currentPage === this.totalPages;
    },
    pageRight() {
      const nextPage = this.currentPage + 1;
      const indexFrom = this.currentPage * 8;
      this.updateImages(indexFrom);
      this.currentPage = nextPage;
      this.disablePageLeft = this.currentPage === 1;
      this.disablePageRight = this.currentPage === this.totalPages;
    },
  },
  computed: mapGetters(["allImages"]),
  created() {
    this.totalPages = Math.ceil(this.allImages.length / 8);
    this.currentPage = 1;
  },
};
</script>

<style scoped>
.pager {
  height: 50px;
  line-height: 50px;
  display: flex;
}
.pager .small {
  flex: 1;
}
.pager .large {
  flex: 1.5;
}
.pager span {
  flex: 0.5;
}
.pager input {
  flex: 0.5;
  text-align: center;
  font-size: 20px;
}
button {
  border-style: none;
  margin: 0 5px;
  background-color: rgba(72, 73, 83, 0.392);
}
</style>