<template>
    <div class="main-app">
        <router-view></router-view>
        <whatsapp-button v-show="isLogged"></whatsapp-button>
        <call-button v-show="isLogged"></call-button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Action, Getter, State } from 'vuex-class';
import Axios from 'axios';

import { GlobalState } from '@/vuex/store';

import WhatsappButton from '@/components/Contact/WhatsappButton.vue';
import CallButton from '@/components/Contact/CallButton.vue';

@Component({
    name: 'App',
    components: {
        WhatsappButton,
        CallButton,
    },
})
export default class App extends Vue {
    @State((state: GlobalState) => state.auth.isLogged)
    private isLogged: boolean;

    public created() {
        const store = this.$store;
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
