<template>
  <svg :viewBox="viewBox" class="p-icon" :style="size">
    <component v-if="name" :is="name" />
  </svg>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import close from './Close.vue';

const iconRegistry = {
  close: {
    viewBox: '0 0 40 40',
  },
};

const allowedIcons = Object.keys(iconRegistry);

@Component({
  name: 'PIcon',
  components: {
    close,
  },
})
export default class PIcon extends Vue {
  @Prop({
    type: String,
    validator: (value: string) => allowedIcons.includes(value),
  })
  private name: string;

  // TODO: Fix types
  get iconConfig(): any {
    return iconRegistry[this.name] || {};
  }

  get viewBox(): any {
    return this.iconConfig.viewBox || '0 0 24 19';
  }
  get size(): any {
    const { iconConfig } = this;
    return {
      width: iconConfig.width ? iconConfig.width + 'em' : undefined,
      height: iconConfig.height ? iconConfig.height + 'em' : undefined,
    };
  }
}
</script>
<style lang="scss" scoped>
.p-icon {
  height: 1em;
  width: 1em;
  vertical-align: -0.125em;
  display: inline-block;
}
</style>
