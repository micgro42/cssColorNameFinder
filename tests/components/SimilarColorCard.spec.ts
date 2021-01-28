import { shallowMount } from '@vue/test-utils';
import SimilarColorCard from '../../src/components/SimilarColorCard.vue';

describe('SimilarColorCard', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(SimilarColorCard, {
      props: {
        colorName: 'red',
        distance: 7.1,
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
