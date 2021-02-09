<template>
    <div class="float" @click="changeLanguage()" data-cy="translation">
        <b-icon pack="fas" icon="globe" class="icon-translation"></b-icon>
        {{ currentLanguage }}
    </div>
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

    private changeLanguajeToSpanish(): void {
        this.mainStore.actions.changeLanguajeToSpanish();
    }

    private changeLanguajeToEnglish(): void {
        this.mainStore.actions.changeLanguajeToEnglish();
    }

    private get currentLanguage(): string | null {
        return this.mainStore.state.currentLanguage;
    }

    private changeLanguage(): void {
        if (this.currentLanguage === 'es') {
            this.changeLanguajeToEnglish();
        } else {
            this.changeLanguajeToSpanish();
        }
    }
}
</script>

<style lang="scss" scoped>
.float {
    position: fixed;
    width: 65px;
    height: 40px;
    top: 20px;
    right: 20px;
    background-color: $main-color;
    color: white;
    border-radius: 15px;
    -webkit-box-shadow: 2px 2px 3px #999;
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 12px;
    .icon-translation {
        margin-right: 3px;
    }
}
</style>
