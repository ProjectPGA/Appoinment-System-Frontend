<template>
    <div class="float" @click="changeLanguage()" data-cy="translation">
        <b-icon pack="fas" icon="globe" class="icon-translation"></b-icon>
        {{ currentLanguage }}
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';

// TODO: Refactor Store
// import { GlobalState } from '@/vuex/store';

@Component({
    name: 'ButtonTranslation',
    components: {},
})
export default class ButtonTranslation extends Vue {
    @Action('language/updateSelectedLanguage')
    private updateSelectedLanguage: (arg) => void;

    @State((state: GlobalState) => state.language.currentLanguage)
    private currentLanguage: string;

    private changeLanguage(): void {
        if (this.currentLanguage === 'es') {
            this.updateSelectedLanguage('en');
        } else {
            this.updateSelectedLanguage('es');
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
    background-color: #e01f2f;
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
