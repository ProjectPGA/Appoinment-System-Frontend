<template>
  <router-link
    v-if="to"
    :to="to"
    class="mobile-navigation-link"
    @click="this.emit('click')"
  >
    <span class="mobile-navigation-label">{{ $t(label) }}</span>
  </router-link>
  <li v-else class="mobile-navigation-link">
    <a :href="path" class="mobile-navigation-label" target="_blank"
      >{{ $t(label) }}
    </a>
  </li>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'MobileNavigationLink',
})
export default class MobileNavigationLink extends Vue {
  @Prop(String) private label: string;
  @Prop(String) private path: string;
  @Prop([String, Object]) private to: string | any;
}
</script>

<style lang="scss" scoped>
.mobile-navigation-link {
  display: block;
  padding: 1.44rem 1.25rem;
}
.mobile-navigation-link:hover {
  background-color: $main-color-medium-light;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.mobile-navigation-icon {
  color: white !important;
}
.mobile-navigation-label {
  font-size: $size-normal;
  color: $main-color-dark !important;
}
</style>
