import Vue from "vue";
import Vuex from "vuex";
import { shallowMount } from "@vue/test-utils";
import Pager from "../src/components/Pager";

describe('Pager.vue', () => {
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    actions = {
      fetchImages: jest.fn(),
      updateImages: jest.fn()
    };
    getters = {
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

  it('should render Pager', () => {
    const wrapper = shallowMount(Pager, { store });
    expect(wrapper.find('.pager').exists()).toBe(true);
  });

  it('should go to the first page when "go to start" button clicked', () => {
    const wrapper = shallowMount(Pager, {
      store
    });
    wrapper.find('.fa-caret-left').trigger("click");
    expect(actions.updateImages).toHaveBeenCalled();
  });

  it('should go to the first page when "go to end" button clicked', () => {
    const wrapper = shallowMount(Pager, {
      store
    });
    wrapper.find('.fa-caret-right').trigger("click");
    expect(actions.updateImages).toHaveBeenCalled();
  });

  it('should show last page when "left" button clicked', () => {
    const wrapper = shallowMount(Pager, {
      store
    });
    wrapper.find('.fa-chevron-left').trigger("click");
    expect(actions.updateImages).toHaveBeenCalled();
  });

  it('should show next page when "right" button clicked', () => {
    const wrapper = shallowMount(Pager, {
      store
    });
    wrapper.find('.fa-chevron-right').trigger("click");
    expect(actions.updateImages).toHaveBeenCalled();
  });
});