import App from '@/App.vue';
import SimilarColorCard from '@/components/SimilarColorCard/SimilarColorCard.vue';
import { shallowMount } from '@vue/test-utils';

describe('App', () => {
    it('shows similar color if color was selected', async () => {
        const wrapper = shallowMount(App);
        wrapper.setData({ name: '#abcdef' });
        await wrapper.vm.$nextTick();
        const similarColorCards = wrapper.findAllComponents(SimilarColorCard);
        expect(similarColorCards.length).toBe(3);
        expect(similarColorCards[0]?.props()).toStrictEqual({ colorName: 'lightblue', distance: 14.352700094407323 });
        expect(similarColorCards[1]?.props()).toStrictEqual({
            colorName: 'lightsteelblue',
            distance: 19.87460691435179,
        });
        expect(similarColorCards[2]?.props()).toStrictEqual({ colorName: 'powderblue', distance: 21.61018278497431 });
    });
});
