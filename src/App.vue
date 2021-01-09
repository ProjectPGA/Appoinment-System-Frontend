<template>
    <div class="main-app">
        <router-view v-if="isLogged" />
        <login v-if="!isLogged" />
        <whatsapp-button v-if="isLogged" />
        <call-button v-if="isLogged" />
        <loading v-if="isLoading" />
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

import Login from '@/views/Login.vue';

@Component({
    name: 'App',
    components: {
        WhatsappButton,
        CallButton,
        Loading,
        Login,
    },
})
export default class App extends Vue {
    private mainStore = mainStore.context(this.$store);
    private authStore = authStore.context(this.$store);

    private get isLogged(): boolean {
        return this.authStore.state.loggedIn;
    }

    private get isLoading(): boolean {
        return this.authStore.state.isLoading;
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
