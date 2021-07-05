<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">
      <b-icon pack="fas" icon="user" />
    </a>

    <div class="navbar-dropdown">
      <div class="navbar-item username-title">
        {{ username }}
      </div>
      <a class="navbar-item">
        <router-link to="/User" class="menu-title">
          {{ $t('common.components.navigation.userSettings') }}
        </router-link>
      </a>
      <hr class="navbar-divider" />
      <a class="navbar-item">
        <router-link to="/" class="menu-title" @click.native="logout()">
          {{ $t('common.components.navigation.userLogOff') }}
        </router-link>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import authStore from '@/store/auth-store/AuthStore';

@Component({
  name: 'DesktopNavigationUser',
})
export default class DesktopNavigationUser extends Vue {
  private authStore = authStore.context(this.$store);

  private logout(): void {
    this.authStore.actions.logout();
  }

  private get username(): string | null {
    return this.authStore.state.name;
  }
}
</script>

<style lang="scss" scoped>
.username-title {
  background-color: #d4d4d4;
  display: block;
  text-align: center;
  padding: 0.95em !important;
}
.navbar-dropdown {
  padding-top: 0rem;
}
</style>
