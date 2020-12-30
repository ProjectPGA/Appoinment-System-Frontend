<template>
    <div class="main-app">
        <router-view></router-view>
        <whatsapp-button v-show="isLogged"></whatsapp-button>
        <call-button v-show="isLogged"></call-button>
        <loading v-show="isLoading"></loading>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Action, Getter, State } from 'vuex-class';
import Axios from 'axios';

import mainStore from '@/store/main-store/MainStore';
import authStore from '@/store/auth-store/AuthStore';

import WhatsappButton from '@/components/Contact/WhatsappButton.vue';
import CallButton from '@/components/Contact/CallButton.vue';
import Loading from '@/components/Utils/Loading.vue';

@Component({
    name: 'App',
    components: {
        WhatsappButton,
        CallButton,
        Loading,
    },
})
export default class App extends Vue {
    private mainStore = mainStore.context(this.$store);
    private authStore = authStore.context(this.$store);

    private get isLogged(): boolean {
        return this.authStore.state.isLogged;
    }

    private get currentLanguage(): string {
        return this.mainStore.state.currentLanguage;
    }

    public created() {
        const store = this.$store;
        this.$i18n.locale = this.currentLanguage;
        Axios.defaults.headers.post['Accept-Language'] = this.currentLanguage;
    }

    @Watch('currentLanguage')
    private onChangeLanguage(language: string) {
        this.$i18n.locale = this.currentLanguage;
    }
}
</script>
<style lang="scss">
.main-app {
    min-width: 320px;
}
</style>
