<template>
    <div>
        <transition name="slide-fade">
            <template v-if="show">
                <div class="menu-container" v-click-outside="hide">
                    <div class="mobile-menu">
                        <router-link
                            to="/"
                            class="menu-title"
                            @click.native="hide"
                        >
                            <img
                                class=" mobile-logo"
                                src="../../assets/img/logo.svg"
                            />
                        </router-link>
                        <mobile-navigation-link
                            label="navigation.index"
                            to="/"
                        ></mobile-navigation-link>
                        <mobile-navigation-link
                            label="navigation.appoinmets"
                            to="/appoinmets"
                            @click.native="hide"
                        ></mobile-navigation-link>
                        <mobile-navigation-link
                            label="navigation.contactUs"
                            to="/contactus"
                            @click.native="hide"
                        ></mobile-navigation-link>
                    </div>
                </div>
            </template>
        </transition>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import MobileNavigationLink from '@/components/Navigation/MobileNavigationLink.vue';

import { GlobalState } from '../../vuex/store';

@Component({
    name: 'MobileNavigationMenu',
    components: {
        MobileNavigationLink,
    },
})
export default class MobileNavigationMenu extends Vue {
    private showModal: boolean = false;

    @Prop(Boolean) private show: boolean;

    private hide() {
        this.$emit('hide');
    }
}
</script>

<style lang="scss" scoped>
.menu-container {
    position: fixed;
    overflow-y: auto;
    top: 0;
    bottom: 0;
    left: 0;
    left: 0;
    z-index: z('menu');
    background-color: #c2c2c2;
    width: 80vw;
    max-width: 430px;
    min-width: 290px;
}
.mobile-menu {
    padding-left: 30px;
    padding-top: 35px;
    padding-right: 20px;
}
.close-nav {
    background: transparent;
    border: none;
    outline: none !important;
    position: fixed;
    left: 10px;
    top: 10px;
    color: white;
    font-size: 30px;
    cursor: pointer;
}
.mobile-logo {
    height: 154px;
    width: 154px;
}
</style>
