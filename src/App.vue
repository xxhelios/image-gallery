<template>
  <div id="app">
    <h1>Image Gallery</h1>
    <Search />
    <Grid />
  </div>
</template>

<script>
import Search from "./components/Search";
import Grid from "./components/Grid";
export default {
  name: "App",
  components: {
    Search,
    Grid,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
