<template>
  <div class="app">
    <h1>CSS Color Name Finder</h1>
    <IntroCard v-if="similarColors.length === 0" />
    <label>Pick a color: <input type="color" @change="changeColor" /></label>
    <div v-if="originalColor && similarColors.length">
      <h2>Colors close to {{ name }}:</h2>
      <SimilarColorCard
        v-for="color in similarColors"
        :key="color.name"
        :color-name="color.name"
        :similar-color="color.color"
        :original-color="originalColor"
      />
    </div>
  </div>
</template>

<script lang="ts">
import getCloseNamedColors from '@/color/similarNamedColors';
import IntroCard from '@/components/IntroCard.vue';
import SimilarColorCard from '@/components/SimilarColorCard.vue';
import { defineComponent } from 'vue';
import Color from 'colorjs.io';

interface similarColorData {
  name: string;
  color: Color;
}

export default defineComponent({
  components: {
    IntroCard,
    SimilarColorCard,
  },
  data() {
    return {
      name: '',
    };
  },
  computed: {
    similarColors(): similarColorData[] {
      if (!this.name) {
        return [];
      }
      const closeNamedColors = getCloseNamedColors(this.name);
      return closeNamedColors.slice(0, 3);
    },
    originalColor(): Color | null {
      if (!this.name) {
        return null;
      }
      return new Color(this.name);
    },
  },
  methods: {
    changeColor(event: Event): void {
      this.name = (event.target as HTMLInputElement).value;
    },
  },
});
</script>
