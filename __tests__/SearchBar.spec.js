import Vue from "vue";
import Vuex from "vuex";
import { shallowMount } from "@vue/test-utils";
import SearchBar from "../src/components/SearchBar";
import data from "../public/data.json";
import flushPromises from 'flush-promises'

describe('SearchBar.vue', () => {
  let actions;
  let getters;
  let store;

  const mockImages = data.photos.photo;

  beforeEach(() => {
    actions = {
      fetchImages: jest.fn(async () => mockImages),
      showFilteredImages: jest.fn(() => mockImages)
    };
    getters = {
      allImages: () => mockImages,
    };
    Vue.use(Vuex);
    store = new Vuex.Store({
      actions,
      getters
    });
  });

  it('should render SearchBar', () => {
    const wrapper = shallowMount(SearchBar, { store });
    expect(wrapper.findComponent(SearchBar).exists()).toBe(true);
  });

  it('should call fetchImages when created', () => {
    const wrapper = shallowMount(SearchBar, { store });
    expect(actions.fetchImages).toHaveBeenCalled();
  });

  it('should have a input box for search', () => {
    const wrapper = shallowMount(SearchBar, { store });
    expect(wrapper.find("input").exists()).toBe(true);
  });

  it('should display number of items filtered and total items', async () => {
    const wrapper = shallowMount(SearchBar, { store });
    await flushPromises();
    expect(wrapper.find(".info-label").text()).toBe("Display 100 of 100 images");
  });

  it('should show filtered images when user input key words', () => {
    const wrapper = shallowMount(SearchBar, { store });
    wrapper.find("input").trigger('input', { value: "glass" });
    expect(actions.showFilteredImages).toHaveBeenCalled();
  });
});