import Vue from "vue";
import { shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
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
    };
    Vue.use(Vuex);
    store = new Vuex.Store({
      actions,
      getters
    });
  });

  it('render pager', () => {
    const wrapper = shallowMount(Pager, { store });
    expect(wrapper.find('.pager').exists()).toBe(true);
  });

  it('goes to the first page when "go to start" button clicked', () => {
    const wrapper = shallowMount(Pager, {
      store
    });
    wrapper.find('.fa-caret-left').trigger("click");
    expect(actions.updateImages).toHaveBeenCalled();
  });
});