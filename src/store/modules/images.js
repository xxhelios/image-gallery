import axios from "axios";

const state = {
  allImages: [],
  imagesOnDisplay: [],
  filteredImages: [],
  totalPages: "",
  currentPage: "",
  disablePageLeft: true,
  disablePageRight: false,
};

const getters = {
  allImages: state => state.allImages,
  filteredImages: state => state.filteredImages,
  imagesOnDisplay: state => state.imagesOnDisplay,
  totalPages: state => state.totalPages,
  currentPage: state => state.currentPage,
  disablePageLeft: state => state.disablePageLeft,
  disablePageRight: state => state.disablePageRight
};

const actions = {
  async fetchImages({ commit }) {
    const response = await axios.get("./data.json");
    const wholeImageList = response.data.photos.photo;
    const imagesOnDisplay = response.data.photos.photo.slice(0, 8);
    const totalPages = Math.ceil(wholeImageList.length / 8);
    commit("persistAllImages", wholeImageList);
    commit("persistFilteredImages", wholeImageList);
    commit("displayImages", imagesOnDisplay);
    commit("updateTotalPages", totalPages);
    commit("updateCurrentPage", 1);
  },
  updateImages({ commit }, payload) {
    const newImageList = state.allImages.slice(payload.indexFrom, payload.indexFrom + 8);
    commit("displayImages", newImageList);
    commit("updateCurrentPage", payload.currentPage);
    commit("updateButtonStatus");
  },
  showFilteredImages({ commit }, images) {
    const filteredImagesOnDisplay = images.slice(0, 8);
    const totalPages = Math.ceil(images.length / 8);
    commit("persistFilteredImages", images);
    commit("displayImages", filteredImagesOnDisplay);
    commit("updateTotalPages", totalPages);
    commit("updateCurrentPage", 1);
    commit("updateButtonStatus");
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
  updateCurrentPage: (state, page) => (state.currentPage = page),
  updateImageItem: (state, image) => {
    state.allImages.forEach((originalImage, index) => {
      if (originalImage.id === image.id) {
        state.allImages[index] = image;
      }
    });
  },
  updateButtonStatus: (state) => {
    state.disablePageLeft = state.currentPage === 1;
    state.disablePageRight = state.currentPage === state.totalPages;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}

