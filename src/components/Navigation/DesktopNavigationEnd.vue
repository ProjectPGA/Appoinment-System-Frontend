<template>
  <div class="navbar-end">
    <desktop-navigation-language />
    <desktop-navigation-user />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import DesktopNavigationUser from '@/components/Navigation/DesktopNavigationUser.vue';
import DesktopNavigationLanguage from '@/components/Navigation/DesktopNavigationLanguage.vue';

@Component({
  name: 'DesktopNavigationEnd',
  components: {
    DesktopNavigationUser,
    DesktopNavigationLanguage,
  },
})
export default class DesktopNavigationEnd extends Vue {}
</script>

<style lang="scss" scoped>
/deep/.navbar-item {
  color: $main-color-dark;
  &:hover {
    .navbar-link {
      color: $main-color-dark;
      background-color: $main-color-medium-light !important;
    }
  }
}
/deep/.navbar-link {
  color: $main-color-dark;
  &:after {
    border-color: $main-color-dark !important;
  }
}
/deep/.menu-title {
  color: $main-color-dark;
}
/deep/.navbar-dropdown {
  right: 0;
  left: unset;
}
</style>
