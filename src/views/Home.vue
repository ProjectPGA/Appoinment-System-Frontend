<template>
    <div class="Home">
        <header-app />
        <!-- <router-view></router-view>
        <content-home v-if="$route.name == 'Home'" /> -->
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';

import authStore from '@/store/auth-store/AuthStore';

import HeaderApp from '@/components/Navigation/Header.vue';
import ContentHome from '@/components/Home/ContentHome.vue';

import { Route } from 'vue-router';
@Component({
    name: 'Home',
    components: {
        HeaderApp,
        ContentHome,
    },
})
export default class Home extends Vue {
    private authStore = authStore.context(this.$store);

    private get isLogged(): boolean {
        return this.authStore.state.loggedIn;
    }

    public async beforeRouteEnter(
        from: Route,
        to: Route,
        next: any
    ): Promise<void> {
        next((vm: Home) => {
            console.log('HANS');
            if (!vm.isLogged) {
                console.log('HANS');
                next('/');
            }
        });
    }
}
</script>

<style lang="scss"></style>
