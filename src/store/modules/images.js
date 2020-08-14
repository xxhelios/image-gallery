import axios from "axios";

const state = {
  allImages: [],
  imagesOnDisplay: [],
  filteredImages: [],
  totalPages: "",
};

const getters = {
  allImages: state => state.allImages,
  filteredImages: state => state.filteredImages,
  imagesOnDisplay: state => state.imagesOnDisplay,
  totalPages: state => state.totalPages,
};

const actions = {
  async fetchImages({ commit }) {
    const response = await axios.get('./data.json');
    const wholeImageList = response.data.photos.photo;
    //TODO: Add validations for data
    const imagesOnDisplay = response.data.photos.photo.slice(0, 8);
    const totalPages = Math.ceil(wholeImageList.length / 8);
    commit("persistAllImages", wholeImageList);
    commit("persistFilteredImages", wholeImageList);
    commit('displayImages', imagesOnDisplay);
    commit('updateTotalPages', totalPages);
  },
  updateImages({ commit }, indexFrom) {
    const newImageList = state.allImages.slice(indexFrom, indexFrom + 8);
    commit('displayImages', newImageList);
  },
  showFilteredImages({ commit }, images) {
    const filteredImagesOnDisplay = images.slice(0, 8);
    const totalPages = Math.ceil(images.length / 8);
    commit("persistFilteredImages", images);
    commit("displayImages", filteredImagesOnDisplay);
    commit('updateTotalPages', totalPages);
  },
  saveImageDetails({ commit }, image) {
    commit("updateImageItem", image);
  }
};

const mutations = {
  persistAllImages: (state, images) => (state.allImages = images),
  persistFilteredImages: (state, images) => (state.filteredImages = images),
  displayImages: (state, images) => (state.imagesOnDisplay = images),
  updateTotalPages: (state, pages) => (state.totalPages = pages),
  updateImageItem: (state, image) => {
    state.allImages.forEach((orgImage, index) => {
      if (orgImage.id === image.id) {
        state.allImages[index] = image;
      }
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}

