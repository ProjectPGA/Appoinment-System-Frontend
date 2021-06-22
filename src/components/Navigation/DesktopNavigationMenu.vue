<template>
  <div class="navbar-start">
    <desktop-navigation-link label="components.navigation.index" to="/Inicio" />
    <desktop-navigation-link
      label="components.navigation.appointments"
      to="/Appointments"
    />
    <desktop-navigation-link
      label="components.navigation.contactUs"
      to="/Contact"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import DesktopNavigationLink from '@/components/Navigation/DesktopNavigationLink.vue';

@Component({
  name: 'DesktopNavigationMenu',
  components: {
    DesktopNavigationLink,
  },
})
export default class DesktopNavigationMenu extends Vue {}
</script>

<style lang="scss" scoped></style>
