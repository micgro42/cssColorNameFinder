<template>
  <div class="similarColorCard">
    <div class="similarColorCard__colorArea">
      <div
        class="similarColorCard__colorHalf"
        :style="'background-color: ' + colorName"
      />
      <div
        class="similarColorCard__colorHalf"
        :style="'background-color: ' + originalHex"
      />
    </div>
    <ColorNames
      :color-name="colorName"
      :color-hex="similarHex"
      :original-hex="originalHex"
    />
    <div class="similarColorCard__comparison">
      <ColorDifferenceDetail
        section-name="Lightness"
        :similar-value="round(similarColor.lightness, 2).toString()"
        :original-value="round(originalColor.lightness, 2).toString()"
      >
        <p v-if="lightnessDiff > 0">
          <i>{{ colorName }}</i> is
          <b>{{ lightnessDiff }}&nbsp;points lighter</b>
          than <i>{{ originalHex }}</i
          >.
        </p>
        <p v-else-if="lightnessDiff < 0">
          <i>{{ colorName }}</i> is
          <b>{{ Math.abs(lightnessDiff) }}&nbsp;points darker</b>
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
        :similar-value="`${round(similarColor.chroma, 2)}`"
        :original-value="`${round(originalColor.chroma, 2)}`"
      >
        <p v-if="chromaDiff > 0">
          <i>{{ colorName }}</i> is
          <b>{{ chromaDiff }}&nbsp;points more intense</b>
          than <i>{{ originalHex }}</i
          >.
        </p>
        <p v-else-if="chromaDiff < 0">
          <i>{{ colorName }}</i> is
          <b>{{ Math.abs(chromaDiff) }}&nbsp;points less intense</b>
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
        :similar-value="`${round(similarColor.hue, 2)}°`"
        :original-value="`${round(originalColor.hue, 2)}°`"
      >
        <p>
          <i>{{ colorName }}</i> differs by
          <b>{{ hueDiff }}&nbsp;degrees</b>
          from <i>{{ originalHex }}</i
          >.
        </p>
      </ColorDifferenceDetail>
    </div>
  </div>
</template>

<script lang="ts">
import { NamedColorData, ColorData } from '@/color/similarNamedColors';
import ColorDifferenceDetail from '@/components/ColorDifferenceDetail.vue';
import ColorNames from '@/components/ColorNames.vue';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  components: { ColorDifferenceDetail, ColorNames },
  props: {
    colorName: {
      type: String,
      required: true,
    },
    similarColor: {
      type: Object as PropType<NamedColorData>,
      required: true,
    },
    originalColor: {
      type: Object as PropType<ColorData>,
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
      const lightnessDiff = this.similarColor.lightness - this.originalColor.lightness;
      return this.round(lightnessDiff, 2);
    },
    chromaDiff(): number {
      const chromaDiff = this.similarColor.chroma - this.originalColor.chroma;
      return this.round(chromaDiff, 2);
    },
    hueDiff(): number {
      const normalizedSimilarHue =
        this.similarColor.hue > 180 ? this.similarColor.hue - 360 : this.similarColor.hue;
      const normalizedOriginalHue =
        this.originalColor.hue > 180 ? this.originalColor.hue - 360 : this.originalColor.hue;
      const diff = normalizedSimilarHue - normalizedOriginalHue;
      return this.round(Math.abs(diff), 2);
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
