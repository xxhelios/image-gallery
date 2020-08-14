import Vue from "vue";
import Vuex from "vuex";
import { mount } from "@vue/test-utils";
import App from "../src/App";
import SearchBar from "../src/components/SearchBar";
import GridView from "../src/components/GridView";

describe('App.vue', () => {
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    actions = {
      fetchImages: jest.fn(),
      showFilteredImages: () => [1, 2, 3]
    };
    getters = {
      allImages: () => [1, 2, 3],
      filteredImages: jest.fn(),
      imagesOnDisplay: jest.fn(),
      totalPages: jest.fn(),
      currentPage: jest.fn(),
      disablePageLeft: jest.fn(),
      disablePageRight: jest.fn()
    };
    Vue.use(Vuex);
    store = new Vuex.Store({
      actions,
      getters
    });
  });

  it('should render "SearchBar" component', () => {
    const wrapper = mount(App, { store });
    expect(wrapper.findComponent(SearchBar)).toBeTruthy();
  });

  it('should render "GridView" component', () => {
    const wrapper = mount(App, { store });
    expect(wrapper.findComponent(GridView)).toBeTruthy();
  });
});