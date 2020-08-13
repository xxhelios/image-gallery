import axios from "axios";

const state = {
  images: {}
};

const getters = {
  allImages: state => state.images
};

const actions = {
  async fetchImages({ commit }) {
    const response = await axios.get('./data.json');
    console.log('@@@@@@@ data: ', response.data.photos.photo);
    commit("loadImages", response.data.photos.photo);
  },
  async searchImages() {
    // search images
  },
  async updateImageDetail() {
    // update image details
  }
};

const mutations = {
  loadImages: (state, images) => (state.images = images),
};

export default {
  state,
  getters,
  actions,
  mutations
}

