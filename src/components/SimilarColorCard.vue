<template>
  <div class="similarColorCard">
    <div class="similarColorCard__colorArea">
      <div class="similarColorCard__colorHalf" :style="'background-color: ' + colorName" />
      <div
        class="similarColorCard__colorHalf"
        :style="'background-color: ' + originalColor.toString()"
      />
    </div>
    <ColorNames :color-name="colorName" :color-hex="similarHex" :original-hex="originalHex" />
    <div class="similarColorCard__comparison">
      <ColorDifferenceDetail
        section-name="Lightness"
        :similar-value="round(similarColor.lch[0], 2).toString()"
        :original-value="round(originalColor.lch[0], 2).toString()"
      >
        <p v-if="lightnessDiff > 0">
          <i>{{ colorName }}</i> is
          <b>{{ round(Math.abs(lightnessDiff), 2) }}&nbsp;points lighter</b>
          than <i>{{ originalHex }}</i
          >.
        </p>
        <p v-else-if="lightnessDiff < 0">
          <i>{{ colorName }}</i> is
          <b>{{ round(Math.abs(lightnessDiff), 2) }}&nbsp;points darker</b>
          than <i>{{ originalHex }}</i
          >.
        </p>
        <p v-else>
          <i>{{ colorName }}</i> is
          <b>exactly as light</b>
          as <i>{{ originalHex }}</i
          >.
        </p>
      </ColorDifferenceDetail>
      <ColorDifferenceDetail
        section-name="Chroma"
        :similar-value="`${round(similarColor.lch[1], 2)}`"
        :original-value="`${round(originalColor.lch[1], 2)}`"
      >
        <p v-if="chromaDiff > 0">
          <i>{{ colorName }}</i> is
          <b>{{ round(Math.abs(chromaDiff), 2) }}&nbsp;points more intense</b>
          than <i>{{ originalHex }}</i
          >.
        </p>
        <p v-else-if="chromaDiff < 0">
          <i>{{ colorName }}</i> is
          <b>{{ round(Math.abs(chromaDiff), 2) }}&nbsp;points less intense</b>
          than <i>{{ originalHex }}</i
          >.
        </p>
        <p v-else>
          <i>{{ colorName }}</i> is
          <b>exactly as intense</b>
          as <i>{{ originalHex }}</i
          >.
        </p>
      </ColorDifferenceDetail>
      <ColorDifferenceDetail
        v-if="!isNaN(hueDiff)"
        section-name="LCH Hue"
        :similar-value="`${round(similarColor.lch[2], 2)}°`"
        :original-value="`${round(originalColor.lch[2], 2)}°`"
      >
        <p>
          <i>{{ colorName }}</i> differs by
          <b>{{ round(Math.abs(hueDiff), 2) }}&nbsp;degrees</b>
          from <i>{{ originalHex }}</i
          >.
        </p>
      </ColorDifferenceDetail>
    </div>
  </div>
</template>

<script lang="ts">
import ColorDifferenceDetail from '@/components/ColorDifferenceDetail.vue';
import ColorNames from '@/components/ColorNames.vue';
import Color from 'colorjs.io';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  components: { ColorDifferenceDetail, ColorNames },
  props: {
    colorName: {
      type: String,
      required: true,
    },
    similarColor: {
      type: Object as PropType<Color>,
      required: true,
    },
    originalColor: {
      type: Object as PropType<Color>,
      required: true,
    },
  },
  computed: {
    originalHex(): string {
      return (
        '#' +
        this.originalColor.srgb
          .map((fraction: number) => (fraction * 255).toString(16).padStart(2, '0'))
          .join('')
      );
    },
    similarHex(): string {
      return (
        '#' +
        this.similarColor.srgb
          .map((fraction: number) => (fraction * 255).toString(16).padStart(2, '0'))
          .join('')
      );
    },
    lightnessDiff(): number {
      return this.similarColor.lch[0] - this.originalColor.lch[0];
    },
    chromaDiff(): number {
      return this.similarColor.lch[1] - this.originalColor.lch[1];
    },
    hueDiff(): number {
      const normalizedSimilarHue =
        this.similarColor.lch[2] > 180 ? this.similarColor.lch[2] - 360 : this.similarColor.lch[2];
      const normalizedOriginalHue =
        this.originalColor.lch[2] > 180
          ? this.originalColor.lch[2] - 360
          : this.originalColor.lch[2];
      return normalizedSimilarHue - normalizedOriginalHue;
      // return this.similarColor.lch[2] - this.originalColor.lch[2];
    },
  },
  methods: {
    round(number: number, decimals = 0): number {
      return (
        Math.round((number + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals)
      );
    },
  },
});
</script>

<style lang="scss">
.similarColorCard {
  margin-top: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
}

.similarColorCard__colorArea {
  min-height: 10vh;
  display: flex;
}

.similarColorCard__colorHalf {
  width: 50%;
}
</style>
