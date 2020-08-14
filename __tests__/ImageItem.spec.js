import { shallowMount, mount } from "@vue/test-utils";
import ImageItem from "../src/components/ImageItem";

describe('ImageItem.vue', () => {
  const mockImage = {
    title: "Glass",
    url_m: "glass.jpg"
  };

  it('contains image item container', () => {
    const wrapper = mount(ImageItem, {
      propsData: {
        image: mockImage
      }
    });
    expect(wrapper.find("div").attributes().id).toBe("image-item");
  });

  it('contains img tag with image url', () => {
    const wrapper = mount(ImageItem, {
      propsData: {
        image: mockImage
      }
    });
    expect(wrapper.find("img").attributes().src).toBe("glass.jpg");
  });

  it('contains span tag with image title', () => {
    const wrapper = mount(ImageItem, {
      propsData: {
        image: mockImage
      }
    });
    expect(wrapper.find("span").text()).toBe("Glass");
  });
});