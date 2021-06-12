<template>
    <b-button
        class="button-translations"
        @click="changeLanguage()"
        data-cy="translation-button"
        type="is-danger"
    >
        <b-icon pack="fas" icon="globe" class="button-translations_icon" />
        {{ currentLanguage }}
    </b-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'ButtonTranslation',
    components: {},
})
export default class ButtonTranslation extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get currentLanguage(): string | null {
        return this.mainStore.state.currentLanguage;
    }

    private changeLanguageToSpanish(): void {
        this.mainStore.actions.changeLanguageToSpanish();
    }

    private changeLanguageToEnglish(): void {
        this.mainStore.actions.changeLanguageToEnglish();
    }

    private changeLanguage(): void {
        this.currentLanguage === 'es'
            ? this.changeLanguageToEnglish()
            : this.changeLanguageToSpanish();
    }
}
</script>

<style lang="scss" scoped>
.button-translations {
    position: fixed;
    top: 1.25rem;
    right: 1.25rem;
    z-index: 1000;
    text-transform: uppercase;
    &_icon {
        margin-right: 0rem !important;
    }
}
</style>
