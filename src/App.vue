<template>
  <div id="app">
    <h1>Image Gallery</h1>
    <SearchBar />
    <GridView />
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import GridView from "./components/GridView";
export default {
  name: "App",
  components: {
    SearchBar,
    GridView,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
