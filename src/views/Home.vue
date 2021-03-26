<template>
    <div>
        <header-app />
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import authStore from '@/store/auth-store/AuthStore';

import HeaderApp from '@/components/Navigation/Header.vue';
import ContentHome from '@/components/Home/ContentHome.vue';

@Component({
    name: 'Home',
    components: {
        HeaderApp,
        ContentHome,
    },
})
export default class Home extends Vue {
    private authStore = authStore.context(this.$store);

    private initialWeek: number = 2;
    private element: string = `#day-1-week-${this.initialWeek}`;

    private get isLogged(): boolean {
        return this.authStore.state.isLogged;
    }

    private renewToken(): void {
        this.authStore.actions.renewToken();
    }

    private mounted(): void {
        this.authStore.actions.disableRegisterProcess();
        setInterval(this.renewToken, 300000);
    }
    private test(): void {
        this.initialWeek++;
        this.element = `#day-1-week-${this.initialWeek}`;
    }
}
</script>

<style lang="scss"></style>
