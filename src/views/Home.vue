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

@Component({
    name: 'Home',
    components: {
        HeaderApp,
        ContentHome,
    },
})
export default class Home extends Vue {
    @State((state: GlobalState) => state.utils.showWhatsappButton)
    private showWhatsappButton: boolean;

    @Mutation('utils/changeStateWhatsappButton')
    private changeStateWhatsappButton;

    public mounted() {
        if (!this.showWhatsappButton) {
            this.changeStateWhatsappButton();
        }
    }
}
</script>

<style lang="scss"></style>
