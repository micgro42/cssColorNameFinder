<template>
  <div class="app">
    <h1>CSS Color Name Finder</h1>
    <IntroCard v-if="similarColors.length === 0"></IntroCard>
    <label>Pick a color: <input v-model="name" type="color" /></label>
    <div v-if="similarColors.length > 0">
      <h2>Colors close to {{ name }}:</h2>
      <SimilarColorCard
        v-for="color in similarColors"
        :key="color[0]"
        :color-name="color[0]"
        :distance="color[1]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Color from 'color';
import { defineComponent } from 'vue';
import IntroCard from './components/IntroCard.vue';
import SimilarColorCard from './components/SimilarColorCard.vue';
import SortColorsRequest from './usecases/SortColors/SortColorsRequest';
import UseCaseFactory from './usecases/UseCaseFactory';

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
    similarColors(): [string, number][] {
      if (!this.name) {
        return [];
      }
      const color = Color(this.name);

      const sortColorsUC = UseCaseFactory.newSortColorsUseCase();
      const requestModel = new SortColorsRequest(color.red(), color.green(), color.blue());
      const responseModel = sortColorsUC.sortColors(requestModel);
      return responseModel.getThreeNearestColors();
    },
  },
});
</script>
