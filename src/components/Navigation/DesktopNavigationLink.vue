<template>
  <router-link
    v-if="to"
    :to="to"
    class="desktop-navigation-link"
    @click="this.emit('click')"
  >
    <span class="desktop-navigation-label">{{ $t(label) }}</span>
  </router-link>
  <li v-else class="desktop-navigation-link">
    <a :href="path" class="desktop-navigation-label" target="_blank">
      {{ $t(label) }}
    </a>
  </li>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'DesktopNavigationLink',
})
export default class DesktopNavigationLink extends Vue {
  @Prop(String) private label: string;
  @Prop(String) private path: string;
  @Prop([String, Object]) private to: string | any;
}
</script>

<style lang="scss" scoped>
.desktop-navigation-link {
  display: block;
  padding: 1.44rem 1.25rem;
}
.desktop-navigation-link:hover {
  background-color: $main-color-medium-light;
  cursor: pointer;
}
.desktop-navigation-icon {
  color: white !important;
}
.desktop-navigation-label {
  font-size: $size-normal;
  color: $main-color-dark !important;
}
</style>
