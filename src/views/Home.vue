<template>
  <div class="Home">
    <header-app />
    <router-view />
    <content-home v-if="$route.name == 'Home'" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import authStore from '@/store/auth-store/AuthStore';

import HeaderApp from '@/components/Navigation/Header.vue';
import ContentHome from '@/components/Home/ContentHome.vue';

@Component({
  name: 'Home',
  components: {
    HeaderApp,
    ContentHome,
  },
})
export default class Home extends Vue {
  private authStore = authStore.context(this.$store);

  private get isLogged(): boolean {
    return this.authStore.state.isLogged;
  }

  private renewToken(): void {
    this.authStore.actions.renewToken();
  }

  private mounted(): void {
    this.authStore.actions.disableRegisterProcess();
    setInterval(this.renewToken, 300000);
  }
}
</script>

<style lang="scss"></style>
