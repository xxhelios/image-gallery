<template>
  <div id="detail-view">
    <div class="blur" @click="closeDetailView"></div>
    <div class="detail-container">
      <div class="view-title">{{ this.image.title }}</div>
      <div class="title-edit">
        <span>Title</span>
        <input type="text" v-model="titleInput" />
      </div>
      <div class="description">
        <span>Description</span>
        <!--
        For description field, some of the content may contain link in html format.
        If the content is editable, then the link is unclickable.
        Currently the description field is only editable when there's no content.
        TODO: Create something like <html-textarea> to make this field editable and clickable.
        -->
        <div v-if="hasDescription" contenteditable="false" v-html="descriptionInput"></div>
        <textarea v-if="!hasDescription" v-model="descriptionInput"></textarea>
      </div>
      <div class="domain">
        <span>Public Domain</span>
        <input type="checkbox" v-model="isPublic" />
      </div>
      <div class="info">
        <div>ID: {{ this.image.id }}</div>
        <div>Owner Name: {{ this.image.ownername }}</div>
        <div>Image Dimensions: {{ this.image.width_m }} x {{ this.image.height_m }}</div>
      </div>
      <div class="buttons">
        <button class="btn-cancel" @click="closeDetailView">Cancel</button>
        <button class="btn-save" @click="saveChanges">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DetailView",
  props: ["image"],
  data() {
    return {
      titleInput: this.image.title,
      descriptionInput: this.image.description._content,
      isPublic: this.image.ispublic,
      hasDescription: !!this.image.description._content,
    };
  },
  methods: {
    ...mapActions(["saveImageDetails"]),
    closeDetailView() {
      this.$emit("showHide", false);
    },
    saveChanges() {
      this.image["title"] = this.titleInput;
      this.image.description["_content"] = this.descriptionInput;
      this.image["ispublic"] = this.isPublic;
      this.saveImageDetails(this.image);
      this.closeDetailView();
    },
  },
};
</script>

<style scoped>
.blur {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  position: absolute;
  background-color: rgb(107, 104, 104);
  opacity: 0.8;
}
.detail-container {
  position: absolute;
  height: 600px;
  width: 40%;
  top: 15%;
  left: 30%;
  margin: auto;
  background-color: #f2f0ef;
  z-index: 100;
  opacity: 1 !important;
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
.description div,
textarea {
  flex: 2;
  order: 2;
  margin-right: 100px;
  height: 150px;
  background-color: #ffffff;
  border: 1px solid #000000;
  text-align: left;
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