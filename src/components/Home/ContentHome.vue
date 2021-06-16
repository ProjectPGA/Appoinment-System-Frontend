<template>
  <div><main-filter-frame></main-filter-frame></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import MainFilterFrame from './MainFilterFrame.vue';

@Component({
  name: 'ContentHome',
  components: {
    MainFilterFrame,
  },
})
export default class ContentHome extends Vue {}
</script>

<style lang="scss" scoped>
.custom-padding {
  padding: 4.5rem;
}
</style>
