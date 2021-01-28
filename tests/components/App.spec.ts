import App from '@/App.vue';
import SimilarColorCard from '@/components/SimilarColorCard.vue';
import { shallowMount } from '@vue/test-utils';

describe('App', () => {
  it('shows similar color if color was selected', async () => {
    const wrapper = shallowMount(App);
    wrapper.setData({ name: '#abcdef' });
    await wrapper.vm.$nextTick();
    const similarColorCards = wrapper.findAllComponents(SimilarColorCard);
    expect(similarColorCards.length).toBe(3);
    expect(similarColorCards[0]?.props()).toStrictEqual({
      colorName: 'lightblue',
      colorParts: [173, 216, 230],
      originalParts: [171, 205, 239],
    });
    expect(similarColorCards[1]?.props()).toStrictEqual({
      colorName: 'lightsteelblue',
      colorParts: [176, 196, 222],
      originalParts: [171, 205, 239],
    });
    expect(similarColorCards[2]?.props()).toStrictEqual({
      colorName: 'powderblue',
      colorParts: [176, 224, 230],
      originalParts: [171, 205, 239],
    });
  });
});
