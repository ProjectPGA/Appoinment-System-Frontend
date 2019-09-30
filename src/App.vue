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

import { GlobalState } from '@/vuex/store';

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
    @State((state: GlobalState) => state.language.currentLanguage)
    private currentLanguage: string;
    @State((state: GlobalState) => state.auth.isLogged)
    private isLogged: boolean;
    @State((state: GlobalState) => state.appointment.isLoading)
    private isLoading: boolean;

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
.p-1 {
    padding: 0.25em !important;
}
.p-2 {
    padding: 0.5em !important;
}
.p-3 {
    padding: !important;
}
.p-4 {
    padding: 1.5em !important;
}
.p-5 {
    padding: 3em !important;
}
.h-100 {
    height: 100% !important;
}
.w-100 {
    width: 100% !important;
}
</style>
