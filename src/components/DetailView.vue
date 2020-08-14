<template>
  <div id="detail-view">
    <div class="view-title">{{this.image.title}}</div>
    <div class="title-edit">
      <span>Title</span>
      <input type="text" :placeholder="this.image.title" />
    </div>
    <div class="description">
      <span>Description</span>
      <input type="text" :placeholder="this.image.description.content" />
    </div>
    <div class="domain">
      <span>Public Domain</span>
      <input type="checkbox" :checked="this.image.ispublic" />
    </div>
    <div class="info">
      <div>ID: {{this.image.id}}</div>
      <div>Owner Name: {{this.image.ownername}}</div>
      <div>Image Dimensions: {{this.image.width_sq}} x {{this.image.height_sq}}</div>
    </div>
    <div class="buttons">
      <button @click="closeDetailView">Cancel</button>
      <button>Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailView",
  props: ["image"],
  methods: {
    closeDetailView() {
      this.$emit("showHide", false);
    },
  },
};
</script>

<style scoped>
#detail-view {
  position: absolute;
  height: 600px;
  width: 40%;
  top: 15%;
  left: 30%;
  margin: auto;
  background-color: rgb(198, 196, 194);
  z-index: 100;
}
.view-title {
  width: 90%;
  margin: auto;
  border-bottom: 2px solid #000000;
  height: 60px;
  line-height: 60px;
  font-size: 48px;
}
.title-edit {
  display: flex;
  margin: 20px auto;
}
span {
  flex: 1;
  order: 1;
  min-width: 150px;
  max-width: 150px;
  text-align: left;
  padding-left: 50px;
  vertical-align: middle;
}
.title-edit input {
  flex: 2;
  order: 2;
  margin-right: 250px;
}
.description {
  display: flex;
  margin: 20px auto;
}
.description input {
  flex: 2;
  order: 2;
  margin-right: 100px;
  height: 150px;
}
.domain {
  display: flex;
  margin: 20px auto;
}
.domain input {
  flex: 2;
  order: 2;
  text-align: left;
  height: 20px;
  line-height: 20px;
  margin-right: 440px;
}
.info {
  text-align: left;
  padding-left: 50px;
  line-height: 30px;
}
</style>