import { shallowMount } from '@vue/test-utils';
import IntroCard from '../../src/components/IntroCard.vue';
import { describe, it, expect } from 'vitest';

describe('IntroCard', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(IntroCard);
    expect(wrapper.element).toMatchSnapshot();
  });
});
