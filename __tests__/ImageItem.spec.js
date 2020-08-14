import { shallowMount } from "@vue/test-utils";
import ImageItem from "../src/components/ImageItem";
import DetailView from "../src/components/DetailView";
import flushPromises from 'flush-promises'

describe('ImageItem.vue', () => {
  const mockImage = {
    title: "Glass",
    url_m: "glass.jpg",
    description: {
      _content: ""
    },
    ownername: "John Doe",
    ispublic: true,
    id: "001",
    height_m: 100,
    width_m: 200
  };

  it('should have image item container', () => {
    const wrapper = shallowMount(ImageItem, {
      propsData: {
        image: mockImage
      },
      data() {
        return {
          show: false,
          imageError: false,
        }
      }
    });
    expect(wrapper.find("div").attributes().id).toBe("image-item");
  });

  it('should contain img tag with image url', () => {
    const wrapper = shallowMount(ImageItem, {
      propsData: {
        image: mockImage
      }
    });
    expect(wrapper.find("img").attributes().src).toBe("glass.jpg");
  });

  it('should use default image if image url throwns error', () => {
    const wrapper = shallowMount(ImageItem, {
      propsData: {
        image: mockImage
      },
      data() {
        return {
          imageError: true
        }
      }
    });
    expect(wrapper.find("img").attributes().src).toBe("./default.jpg");
  });

  it('should contain span tag with image title', () => {
    const wrapper = shallowMount(ImageItem, {
      propsData: {
        image: mockImage
      }
    });
    expect(wrapper.find("span").text()).toBe("Glass");
  });

  it('should hide "DetailView" before click on image', () => {
    const wrapper = shallowMount(ImageItem, {
      propsData: {
        image: mockImage
      },
      data() {
        return {
          show: false
        }
      }
    });
    expect(wrapper.findComponent(DetailView).exists()).toBe(false);
  });

  it('should show "DetailView" after click on image', async () => {
    const wrapper = shallowMount(ImageItem, {
      propsData: {
        image: mockImage
      },
      data() {
        return {
          show: false
        }
      }
    });
    await wrapper.find("img").trigger("click");
    expect(wrapper.findComponent(DetailView).exists()).toBe(true);
  });

  it('should subscrib to showHide event and update show/hide status for DetailView', async () => {
    const wrapper = shallowMount(ImageItem, {
      propsData: {
        image: mockImage
      },
      data() {
        return {
          show: true
        }
      }
    });
    wrapper.findComponent(DetailView).vm.$emit("showHide", false);
    await flushPromises();
    expect(wrapper.findComponent(DetailView).exists()).toBe(false);
  });
});