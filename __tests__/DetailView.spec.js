import Vue from "vue";
import Vuex from "vuex";
import { shallowMount } from "@vue/test-utils";
import data from "../public/data.json";
import DetailView from "../src/components/DetailView";

describe('DetailView.vue', () => {
  let actions;
  let store;

  const mockImages = data.photos.photo;

  beforeEach(() => {
    actions = {
      saveImageDetails: jest.fn()
    };
    Vue.use(Vuex);
    store = new Vuex.Store({
      actions
    });
  });

  it('should render DetailView component', () => {
    const wrapper = shallowMount(DetailView, { store, propsData: { image: mockImages[0] } });
    expect(wrapper.findComponent(DetailView).exists()).toBe(true);
  });

  it('should display image title', () => {
    const wrapper = shallowMount(DetailView, { store, propsData: { image: mockImages[0] } });
    expect(wrapper.find(".view-title").text()).toBe("Glasses");
  });

  it('should display non-editable description if it provides description content', () => {
    const wrapper = shallowMount(DetailView, { store, propsData: { image: mockImages[6] } });
    expect(wrapper.findAll("div").at(6).attributes().contenteditable).toBe("false");
  });

  it('should display editable text area if it does not provide description content', () => {
    const wrapper = shallowMount(DetailView, { store, propsData: { image: mockImages[0] } });
    expect(wrapper.find('textarea').exists()).toBe(true);
  });

  it('should display checkbox to indicate if the image is public domain', () => {
    const wrapper = shallowMount(DetailView, { store, propsData: { image: mockImages[0] } });
    expect(wrapper.findAll("input").at(1).element.checked).toBe(true);
  });

  it('should display other info of the image', () => {
    const wrapper = shallowMount(DetailView, { store, propsData: { image: mockImages[0] } });
    expect(wrapper.findAll("div").at(8).text()).toBe("ID: 5002248685");
    expect(wrapper.findAll("div").at(9).text()).toBe("Owner Name: H_Boston");
    expect(wrapper.findAll("div").at(10).text()).toBe("Image Dimensions: 499 x 500");
  });

  it('should close detail view when click on cancel button', () => {
    const wrapper = shallowMount(DetailView, { store, propsData: { image: mockImages[0] } });
    const cancelButton = wrapper.find('.btn-cancel');
    cancelButton.trigger("click");
    expect(wrapper.emitted("showHide")).toHaveLength(1);
  });

  it('should close detail view when user click any area outside the detail view', () => {
    const wrapper = shallowMount(DetailView, { store, propsData: { image: mockImages[0] } });
    const blur = wrapper.find('.blur');
    blur.trigger("click");
    expect(wrapper.emitted("showHide")).toHaveLength(1);
  });

  it('should call saveImageDetails action when user click save button', () => {
    const wrapper = shallowMount(DetailView, { store, propsData: { image: mockImages[0] } });
    const saveButton = wrapper.find('.btn-save');
    saveButton.trigger("click");
    expect(actions.saveImageDetails).toHaveBeenCalled();
    expect(wrapper.emitted("showHide")).toHaveLength(1);
  });
});