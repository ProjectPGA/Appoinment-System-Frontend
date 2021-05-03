<template>
    <div class="main-app">
        <maintenance-page v-if="isMaintenance" />
        <template v-else>
            <router-view v-if="isLogged || isRegisterProcess" />
            <login v-if="!isLogged && !isRegisterProcess" />
            <whatsapp-button v-if="isLogged" />
            <call-button v-if="isLogged" />
            <loading v-if="isLoading" />
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Axios from 'axios';

import mainStore from '@/store/main-store/MainStore';
import authStore from '@/store/auth-store/AuthStore';

import WhatsappButton from '@/components/Contact/WhatsappButton.vue';
import CallButton from '@/components/Contact/CallButton.vue';
import Loading from '@/components/Utils/Loading.vue';

import Login from '@/views/Login.vue';
import MaintenancePage from '@/views/MaintenancePage.vue';

@Component({
    name: 'App',
    components: {
        WhatsappButton,
        CallButton,
        Loading,
        Login,
        MaintenancePage,
    },
})
export default class App extends Vue {
    private mainStore = mainStore.context(this.$store);
    private authStore = authStore.context(this.$store);

    public created(): void {
        this.$i18n.locale = this.currentLanguage;

        Axios.defaults.headers.post['Accept-Language'] = this.currentLanguage;

        this.checkUserToken();
    }

    private get isLogged(): boolean {
        return this.authStore.state.isLogged;
    }

    private get isLoading(): boolean {
        return this.authStore.state.isLoading;
    }

    private get currentLanguage(): string {
        return this.mainStore.state.currentLanguage;
    }

    private get isRegisterProcess(): boolean {
        return this.authStore.state.isRegisterProcess;
    }

    private get isMaintenance(): boolean {
        return this.mainStore.state.isMaintenance;
    }

    private checkUserToken(): void {
        this.authStore.actions.checkUserToken();
    }

    @Watch('currentLanguage')
    private onChangeLanguage(): void {
        this.$i18n.locale = this.currentLanguage;
    }
}
</script>
<style lang="scss">
.main-app {
    min-width: 20rem;
}
</style>
