<template>
  <div class="ColorNames">
    <div class="ColorNames__names">
      <!-- width 50%! -->
      <h3>{{ colorName }}</h3>
      <h3>your color:</h3>
    </div>
    <div class="ColorNames__values">
      <span>{{ colorHex }}</span>
      <span>{{ originalHex }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    colorName: {
      type: String,
      required: true,
    },
    colorHex: {
      type: String,
      required: true,
    },
    originalHex: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.ColorNames {
  padding-bottom: 1em;
}
.ColorNames__names {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
}
.ColorNames__values {
  display: flex;
  justify-content: space-around;
}
</style>
