import { nextTick } from 'vue';
import App from '@/App.vue';
import SimilarColorCard from '@/components/SimilarColorCard.vue';
import { mount } from '@vue/test-utils';

describe('App', () => {
  it('shows similar colors if color was selected2', async () => {
    const wrapper = mount(App);
    wrapper.setData({ name: '#abcdef' });
    await nextTick();
    const similarColorCards = wrapper.findAllComponents(SimilarColorCard);
    expect(similarColorCards.length).toBe(3);
    expect(similarColorCards[0]?.props('colorName')).toBe('lightsteelblue');
    expect(similarColorCards[1]?.props('colorName')).toBe('lightskyblue');
    expect(similarColorCards[2]?.props('colorName')).toBe('skyblue');
    expect(wrapper.element).toMatchSnapshot();
  });
});
