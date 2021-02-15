<template>
    <b-button
        class="button-translations"
        @click="changeLanguage()"
        data-cy="translation"
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

    private changeLanguajeToSpanish(): void {
        this.mainStore.actions.changeLanguajeToSpanish();
    }

    private changeLanguajeToEnglish(): void {
        this.mainStore.actions.changeLanguajeToEnglish();
    }

    private changeLanguage(): void {
        this.currentLanguage === 'es'
            ? this.changeLanguajeToEnglish()
            : this.changeLanguajeToSpanish();
    }
}
</script>

<style lang="scss" scoped>
.button-translations {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    text-transform: uppercase;
    &_icon {
        margin-right: 0px !important;
    }
}
</style>
