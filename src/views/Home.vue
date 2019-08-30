<template>
    <div class="Home">
        <header-app></header-app>
        <router-view></router-view>
        <content-home v-if="$route.name == 'Home'" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';

import { GlobalState } from '../vuex/store';

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
    @State((state: GlobalState) => state.auth.isLogged)
    private isLogged: boolean;

    @Mutation('utils/changeStateWhatsappButton')
    private changeStateWhatsappButton;

    public async beforeRouteEnter(from: Route, to: Route, next: any) {
        next((vm: Home) => {
            if (vm.isLogged === false) {
                next('/');
            }
        });
    }
}
</script>

<style lang="scss"></style>
