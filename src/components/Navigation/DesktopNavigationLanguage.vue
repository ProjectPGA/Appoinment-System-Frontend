<template>
    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
            <b-icon pack="fas" icon="globe"></b-icon>
            <span class="current-language">
                {{ currentLanguage }}
            </span>
        </a>

        <div class="navbar-dropdown">
            <div class="navbar-item language-title">
                {{ $t('titles.language') }}
            </div>
            <a
                :class="{
                    'is-active': currentLanguage === 'es',
                }"
                class="navbar-item"
                @click="changeLanguajeToSpanish"
            >
                {{ $t('languages.spanish') }}
            </a>
            <a
                :class="{
                    'is-active': currentLanguage === 'en',
                }"
                class="navbar-item"
                @click="changeLanguajeToEnglish"
            >
                {{ $t('languages.english') }}
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

    private changeLanguajeToSpanish(): void {
        this.mainStore.actions.changeLanguajeToSpanish();
    }

    private changeLanguajeToEnglish(): void {
        this.mainStore.actions.changeLanguajeToEnglish();
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
    padding: 15px !important;
}
.navbar-dropdown {
    padding-top: 0px;
}
</style>
