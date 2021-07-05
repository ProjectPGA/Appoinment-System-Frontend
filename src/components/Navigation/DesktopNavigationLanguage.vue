<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">
      <b-icon pack="fas" icon="globe" />
      <span class="current-language">
        {{ currentLanguage }}
      </span>
    </a>

    <div class="navbar-dropdown">
      <div class="navbar-item language-title">
        {{ $t('common.title.language') }}
      </div>
      <a
        :class="{
          'is-active': currentLanguage === 'es',
        }"
        class="navbar-item"
        @click="changeLanguageToSpanish"
      >
        {{ $t('common.languages.spanish') }}
      </a>
      <a
        :class="{
          'is-active': currentLanguage === 'en',
        }"
        class="navbar-item"
        @click="changeLanguageToEnglish"
      >
        {{ $t('common.languages.english') }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

@Component({
  name: 'DesktopNavigationLanguage',
})
export default class DesktopNavigationLanguage extends Vue {
  private mainStore = mainStore.context(this.$store);

  private changeLanguageToSpanish(): void {
    this.mainStore.actions.changeLanguageToSpanish();
  }

  private changeLanguageToEnglish(): void {
    this.mainStore.actions.changeLanguageToEnglish();
  }

  private get currentLanguage(): string | null {
    return this.mainStore.state.currentLanguage;
  }
}
</script>

<style lang="scss" scoped>
.current-language {
  text-transform: uppercase;
  font-weight: bold;
}
.is-active {
  background-color: $main-color-medium-light !important;
}
.language-title {
  background-color: $main-color-medium-light;
  display: block;
  text-align: center;
  padding: 0.95em !important;
}
.navbar-dropdown {
  padding-top: 0rem;
}
</style>
