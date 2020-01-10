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
                @click="toSpanish"
            >
                {{ $t('languages.spanish') }}
            </a>
            <a
                :class="{
                    'is-active': currentLanguage === 'en',
                }"
                class="navbar-item"
                @click="toEnglish"
            >
                {{ $t('languages.english') }}
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';

import { GlobalState } from '@/vuex/store';

import { Language } from '@/models/Language';
@Component({
    name: 'DesktopNavigationLanguage',
})
export default class DesktopNavigationLanguage extends Vue {
    @Action('language/updateSelectedLanguage')
    private updateSelectedLanguage: (arg) => void;

    @State((state: GlobalState) => state.language.currentLanguage)
    private currentLanguage: string;

    private toSpanish(): void {
        this.updateSelectedLanguage('es');
    }
    private toEnglish(): void {
        this.updateSelectedLanguage('en');
    }
}
</script>

<style lang="scss" scoped>
.current-language {
    text-transform: uppercase;
    font-weight: bold;
}
.is-active {
    background-color: #f1f1f1 !important;
}
.language-title {
    background-color: #d4d4d4;
    display: block;
    text-align: center;
    padding: 15px !important;
}
.navbar-dropdown {
    padding-top: 0px;
}
</style>
