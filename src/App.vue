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
      const parsedInput = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.name);
      if (!parsedInput || !parsedInput[1] || !parsedInput[2] || !parsedInput[3]) {
        return [];
      }
      const red: number = parseInt(parsedInput[1], 16);
      const green: number = parseInt(parsedInput[2], 16);
      const blue: number = parseInt(parsedInput[3], 16);

      const sortColorsUC = UseCaseFactory.newSortColorsUseCase();
      const requestModel = new SortColorsRequest(red, green, blue);
      const responseModel = sortColorsUC.sortColors(requestModel);
      return responseModel.getThreeNearestColors();
    },
  },
});
</script>
