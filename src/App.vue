<template>
  <div class="app">
    <h1>CSS Color Name Finder</h1>
    <IntroCard v-if="similarColors.length === 0" />
    <label>Pick a color: <input type="color" @change="changeColor" /></label>
    <div v-if="originalColorParts && similarColors.length">
      <h2>Colors close to {{ name }}:</h2>
      <SimilarColorCard
        v-for="color in similarColors"
        :key="color.name"
        :color-name="color.name"
        :color-parts="color.rgb"
        :original-parts="originalColorParts"
      />
    </div>
  </div>
</template>

<script lang="ts">
import IntroCard from '@/components/IntroCard.vue';
import SimilarColorCard from '@/components/SimilarColorCard.vue';
import SortColorsRequest from '@/usecases/SortColors/SortColorsRequest';
import UseCaseFactory from '@/usecases/UseCaseFactory';
import Color from 'color';
import { defineComponent } from 'vue';

type RGBTriple = [number, number, number];

interface similarColorData {
  name: string;
  rgb: RGBTriple;
  distance: number;
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
      const color = Color(this.name);

      const sortColorsUC = UseCaseFactory.newSortColorsUseCase();
      const requestModel = new SortColorsRequest(color.red(), color.green(), color.blue());
      const responseModel = sortColorsUC.sortColors(requestModel);

      // TODO: get rid of use-cases and use plain actions!
      return responseModel.getThreeNearestColors().map(
        (colorData: [string, RGBTriple, number]): similarColorData => {
          return {
            name: colorData[0],
            rgb: colorData[1],
            distance: colorData[2],
          };
        },
      );
    },
    originalColorParts(): RGBTriple | null {
      if (!this.name) {
        return null;
      }
      const color = Color(this.name);
      return color.rgb().array() as RGBTriple;
    },
  },
  methods: {
    changeColor(event: Event): void {
      this.name = (event.target as HTMLInputElement).value;
    },
  },
});
</script>
