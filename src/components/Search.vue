<template>
  <div id="search-bar">
    <span class="search-label">Search</span>
    <input class="input-box" type="text" name id />
    <span class="info-label">Display 0 of 100 images</span>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style>
#search-bar {
  display: flex;
  margin: auto;
  border-bottom: 2px solid #000000;
  padding: 20px 0;
}
.search-label {
  flex: 1;
}
.input-box {
  flex: 3;
}
.info-label {
  flex: 3;
}
</style>