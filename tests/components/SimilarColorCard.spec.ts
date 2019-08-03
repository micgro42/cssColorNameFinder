import {shallowMount} from '@vue/test-utils';
import SimilarColorCard from '../../src/components/SimilarColorCard/SimilarColorCard.vue';

describe( 'SimilarColorCard', () => {
    it( 'matches snapshot', () => {
        const wrapper = shallowMount(SimilarColorCard, {
            propsData: {
                colorName: 'red',
                distance: 7,
            }});
        expect(wrapper.element).toMatchSnapshot();
    } );
} );
