import App from '@/App.vue';
import SimilarColorCard from '@/components/SimilarColorCard.vue';
import { shallowMount } from '@vue/test-utils';
import Color from 'colorjs.io';

describe('App', () => {
  it('shows similar color if color was selected', async () => {
    const wrapper = shallowMount(App);
    wrapper.setData({ name: '#abcdef' });
    await wrapper.vm.$nextTick();
    const similarColorCards = wrapper.findAllComponents(SimilarColorCard);
    expect(similarColorCards.length).toBe(3);
    expect(similarColorCards[0]?.props()).toStrictEqual({
      colorName: 'lightsteelblue',
      originalColor: new Color('#abcdef'),
      similarColor: new Color('lightsteelblue'),
    });
    expect(similarColorCards[1]?.props()).toStrictEqual({
      colorName: 'lightskyblue',
      originalColor: new Color('#abcdef'),
      similarColor: new Color('lightskyblue'),
    });
    expect(similarColorCards[2]?.props()).toStrictEqual({
      colorName: 'skyblue',
      originalColor: new Color('#abcdef'),
      similarColor: new Color('skyblue'),
    });
  });
});
