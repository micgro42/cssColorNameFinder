import { shallowMount } from '@vue/test-utils';
import Color from 'colorjs.io';
import SimilarColorCard from '../../src/components/SimilarColorCard.vue';

describe('SimilarColorCard', () => {
  it('calculates differences in colors correctly', () => {
    const wrapper = shallowMount(SimilarColorCard, {
      props: {
        colorName: 'red',
        similarColor: new Color('red'),
        originalColor: new Color('chocolate'),
      },
    });
    expect(wrapper.vm.hueDiff).toBe(14.86);
    expect(wrapper.vm.chromaDiff).toBe(37.18);
    expect(wrapper.vm.lightnessDiff).toBe(-2.34);
  });

  it('The difference in hue is always less than 180', () => {
    const wrapper = shallowMount(SimilarColorCard, {
      props: {
        colorName: 'red',
        similarColor: new Color('red'),
        originalColor: new Color('deeppink'),
      },
    });
    expect(wrapper.vm.hueDiff).toBe(43.68);
  });
});
