<template>
  <div class="pager">
    <button class="fas fa-caret-left large" v-on:click="goToStart" :disabled="!!disablePageLeft"></button>
    <button
      class="fas fa-chevron-left small"
      v-on:click="pageThrough(false)"
      :disabled="!!disablePageLeft"
    ></button>

    <div class="content">
      <!-- TODO: input field disabled, add feature to jump to typed page -->
      <input type="text" :placeholder="currentPage" disabled />
      <span>of</span>
      <span>{{ this.totalPages }}</span>
    </div>

    <button
      class="fas fa-chevron-right small"
      v-on:click="pageThrough(true)"
      :disabled="!!disablePageRight"
    ></button>
    <button class="fas fa-caret-right large" v-on:click="goToEnd" :disabled="!!disablePageRight"></button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Pager",
  methods: {
    ...mapActions(["updateImages"]),
    goToStart() {
      this.updateImages({
        indexFrom: 0,
        currentPage: 1,
      });
    },
    goToEnd() {
      const lastPage = this.totalPages;
      this.updateImages({
        indexFrom: lastPage * 8 - 8,
        currentPage: lastPage,
      });
    },
    pageThrough(isPageRight) {
      const newPage = isPageRight ? this.currentPage + 1 : this.currentPage - 1;
      const indexFrom = (newPage - 1) * 8;
      this.updateImages({
        indexFrom,
        currentPage: newPage,
      });
    },
    //TODO: goToPage() {},
  },
  computed: mapGetters([
    "totalPages",
    "currentPage",
    "disablePageLeft",
    "disablePageRight",
  ]),
};
</script>

<style scoped>
.pager {
  height: 50px;
  width: 40%;
  margin: 10px auto;
  line-height: 50px;
  display: flex;
  justify-content: center;
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
.content {
  flex: 0.5;
  text-align: center;
  font-size: 20px;
  display: flex;
}
input {
  width: 50px;
  flex: 1;
  text-align: center;
  margin-right: 5px;
  font-size: 20px;
}
span {
  flex: 1;
  padding: 0 5px;
}
button {
  border-style: none;
  margin: 0 5px;
  background-color: #1f82f2;
  color: #fff;
  font-size: 28px;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
}
button:disabled {
  background-color: #1664bb;
}
</style>