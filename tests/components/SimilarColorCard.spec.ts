import { shallowMount } from '@vue/test-utils';
import SimilarColorCard from '../../src/components/SimilarColorCard.vue';

describe('SimilarColorCard', () => {
  it('calculates differences in colors correctly', () => {
    const wrapper = shallowMount(SimilarColorCard, {
      props: {
        colorName: 'red',
        colorParts: [255, 0, 0],
        originalParts: [245, 12, 78],
      },
    });
    expect(wrapper.vm.hueDiff).toBe(17);
    expect(wrapper.vm.saturationDiff).toBe(5);
    expect(wrapper.vm.lightnessDiff).toBe(1);
  });

  it('The difference in hue is always less than 180', () => {
    const wrapper = shallowMount(SimilarColorCard, {
      props: {
        colorName: 'red',
        colorParts: [255, 0, 0],
        originalParts: [245, 230, 0],
      },
    });
    expect(wrapper.vm.hueDiff).toBe(56);
  });
});
