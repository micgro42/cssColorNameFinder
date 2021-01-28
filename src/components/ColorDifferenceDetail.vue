<template>
  <div class="ColorDifferenceDetail">
    <h4 class="ColorDifferenceDetail__headline">{{ sectionName }}</h4>
    <div class="ColorDifferenceDetail__values">
      <span>{{ similarValue }}</span>
      <span>{{ originalValue }}</span>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    sectionName: {
      type: String,
      required: true,
    },
    similarValue: {
      type: String,
      required: true,
    },
    originalValue: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.ColorDifferenceDetail {
  padding: 1em;

  &__headline {
    text-align: center;
  }

  &__values {
    display: flex;
    justify-content: space-around;
  }
}
</style>
