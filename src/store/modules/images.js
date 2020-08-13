import axios from "axios";

const state = {
  allImages: [],
  imagesOnDisplay: []
};

const getters = {
  allImages: state => state.allImages,
  imagesOnDisplay: state => state.imagesOnDisplay
};

const actions = {
  async fetchImages({ commit }) {
    const response = await axios.get('./data.json');
    const wholeImageList = response.data.photos.photo;
    const imageList = response.data.photos.photo.slice(0, 8);
    //TODO: Add validations for data
    commit('persistAllImages', wholeImageList);
    commit("displayImages", imageList);
  },
  async updateImages({ commit }, indexFrom) {
    const newImageList = state.allImages.slice(indexFrom, indexFrom + 8);
    commit('displayImages', newImageList);
  },
  async searchImages() {
    // search images
  },
  async saveImageDetails() {
    // update image details
  }
};

const mutations = {
  persistAllImages: (state, images) => (state.allImages = images),
  displayImages: (state, images) => (state.imagesOnDisplay = images)
};

export default {
  state,
  getters,
  actions,
  mutations
}

