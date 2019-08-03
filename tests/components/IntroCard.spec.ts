import { shallowMount } from '@vue/test-utils';
import IntroCard from '../../src/components/IntroCard/IntroCard.vue';

describe( 'IntroCard', () => {
    it( 'matches snapshot', () => {
        const wrapper = shallowMount( IntroCard );
        expect( wrapper.element ).toMatchSnapshot();
    } );
} );
