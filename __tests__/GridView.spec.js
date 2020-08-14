import Vue from "vue";
import { shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import GridView from "../src/components/GridView";
import ImageItem from "../src/components/ImageItem";
import Pager from "../src/components/Pager";

describe('GridView.vue', () => {
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    actions = {
      fetchImages: jest.fn(),
    };
    getters = {
      imagesOnDisplay: jest.fn(),
    };
    Vue.use(Vuex);
    store = new Vuex.Store({
      actions,
      getters
    });
  });

  it('calls store action "fetchImages" on created', () => {
    const wrapper = shallowMount(GridView, { store });
    expect(actions.fetchImages).toHaveBeenCalled();
  });

  it('renders "ImageItem" component', () => {
    const wrapper = shallowMount(GridView, { store });
    expect(wrapper.findComponent(ImageItem)).toBeTruthy();
  });

  it('renders "Pager" component', () => {
    const wrapper = shallowMount(GridView, { store });
    expect(wrapper.findComponent(Pager)).toBeTruthy();
  });
});