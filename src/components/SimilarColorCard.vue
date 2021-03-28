<template>
  <div class="similarColorCard">
    <div class="similarColorCard__colorArea">
      <div class="similarColorCard__colorHalf" :style="'background-color: ' + colorName" />
      <div
        class="similarColorCard__colorHalf"
        :style="'background-color: ' + originalColor.hex()"
      />
    </div>
    <ColorNames
      :color-name="colorName"
      :color-hex="similarColor.hex()"
      :original-hex="originalColor.hex()"
    />
    <div class="similarColorCard__comparison">
      <ColorDifferenceDetail
        section-name="Luminosity"
        :similar-value="`${Math.round(similarColor.luminosity() * 100)}%`"
        :original-value="`${Math.round(originalColor.luminosity() * 100)}%`"
      >
        <p v-if="lightnessDiff > 0">
          <i>{{ colorName }}</i> is
          <b>{{ Math.abs(lightnessDiff) }}&nbsp;percentage points lighter</b>
          than <i>{{ originalColor.hex() }}</i
          >.
        </p>
        <p v-else>
          <i>{{ colorName }}</i> is
          <b>{{ Math.abs(lightnessDiff) }}&nbsp;percentage points darker</b>
          than <i>{{ originalColor.hex() }}</i
          >.
        </p>
      </ColorDifferenceDetail>
      <ColorDifferenceDetail
        section-name="Saturation"
        :similar-value="`${Math.round(similarColor.saturationv())}%`"
        :original-value="`${Math.round(originalColor.saturationv())}%`"
      >
        <p v-if="saturationDiff > 0">
          <i>{{ colorName }}</i> is
          <b>{{ Math.abs(saturationDiff) }}&nbsp;percentage points more saturated</b>
          than <i>{{ originalColor.hex() }}</i
          >.
        </p>
        <p v-else>
          <i>{{ colorName }}</i> is
          <b>{{ Math.abs(saturationDiff) }}&nbsp;percentage points less saturated</b>
          than <i>{{ originalColor.hex() }}</i
          >.
        </p>
      </ColorDifferenceDetail>
      <ColorDifferenceDetail
        section-name="Hue"
        :similar-value="`${Math.round(similarColor.hue())}°`"
        :original-value="`${Math.round(originalColor.hue())}°`"
      >
        <p>
          <i>{{ colorName }}</i> differs by
          <b>{{ hueDiff }}&nbsp;degrees</b>
          from <i>{{ originalColor.hex() }}</i
          >.
        </p>
      </ColorDifferenceDetail>
    </div>
  </div>
</template>

<script lang="ts">
import ColorDifferenceDetail from '@/components/ColorDifferenceDetail.vue';
import ColorNames from '@/components/ColorNames.vue';
import Color from 'color';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  components: { ColorDifferenceDetail, ColorNames },
  props: {
    colorName: {
      type: String,
      required: true,
    },
    colorParts: {
      type: Array as PropType<number[]>,
      required: true,
    },
    originalParts: {
      type: Array as PropType<number[]>,
      required: true,
    },
  },
  computed: {
    similarColor(): Color {
      return Color.rgb(this.colorParts);
    },
    originalColor(): Color {
      return Color.rgb(this.originalParts);
    },
    lightnessDiff(): number {
      return (
        Math.round(this.similarColor.luminosity() * 100) -
        Math.round(this.originalColor.luminosity() * 100)
      );
    },
    saturationDiff(): number {
      return (
        Math.round(this.similarColor.saturationv()) - Math.round(this.originalColor.saturationv())
      );
    },
    hueDiff(): number {
      const diff = Math.round(Math.abs(this.similarColor.hue() - this.originalColor.hue()));
      if (diff > 180) {
        return 360 - diff;
      }
      return diff;
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
