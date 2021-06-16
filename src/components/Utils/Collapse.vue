<template>
  <b-collapse
    class="card collapse"
    :class="{ 'no-style': noStyle }"
    :open="false"
    @open="onOpen"
    @close="onClose"
  >
    <div
      slot="trigger"
      slot-scope="props"
      class="card-header collapse-header"
      role="button"
    >
      <p class="card-header-title collapse-title">
        <slot name="collapse_title" />
      </p>
      <rotate-icon
        iconSize="xs"
        :icon="props.open ? iconOpen : iconClose"
        iconPack="fas"
        class="collapse-icon"
        v-if="noStyle"
      ></rotate-icon>
      <a class="card-header-icon" v-if="!noStyle">
        <rotate-icon
          :rotate="props.open"
          :iconPack="iconPack"
          :icon="iconDisplay"
          iconSize="xs"
        ></rotate-icon>
      </a>
    </div>
    <div class="card-content collapse-content"><slot></slot></div>
  </b-collapse>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import RotateIcon from '@/components/Utils/RotateIcon.vue';

@Component({
  name: 'Collapse',
  components: {
    RotateIcon,
  },
})
export default class Collapse extends Vue {
  @Prop({
    type: String,
    default: 'chevron-down',
  })
  private iconDisplay: string;
  @Prop({
    type: String,
    default: 'fas',
  })
  private iconPack: string;
  @Prop({
    type: Boolean,
    default: false,
  })
  private noStyle: boolean;

  @Prop({
    type: String,
    default: 'minus',
  })
  private iconOpen: string;

  @Prop({
    type: String,
    default: 'plus',
  })
  private iconClose: string;

  private onOpen(): void {
    this.$emit('open');
  }

  private onClose(): void {
    this.$emit('close');
  }
}
</script>

<style lang="scss" scoped>
.collapse {
  background: $main-color-light;
  box-shadow: none;

  &.no-style {
    box-shadow: none;
    border: none;

    .collapse-title {
      padding: 0;
      font-weight: normal;
    }

    .collapse-icon {
      padding-left: 0.75em;
    }
  }
}
.collapse-header {
  box-shadow: none;
  cursor: pointer;
}
.collapse-title {
  color: $main-color-dark;
  padding: 0rem;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
}
.collapse-content {
  padding: 0.32rem 1.7rem;

  @include mobile {
    padding: 0.32rem 0.88rem;
  }
}
.card-header-icon {
  padding-right: 0.81rem;
}
.collapse-icon {
  height: 1.5rem;
  @include mobile {
    font-size: 0.75em;
  }

  ::before {
    font-family: 'FontAwesome';
    font-weight: normal;
    color: $main-color-dark;
  }
}
</style>
