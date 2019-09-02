<template>
    <div>
        <transition name="slide-fade">
            <template v-if="show">
                <div class="menu-container" v-click-outside="hide">
                    <div class="mobile-menu">
                        <button class="close-nav" @click="hide">
                            <p-icon name="close"></p-icon>
                        </button>
                        <router-link
                            to="/Inicio"
                            class="menu-title"
                            @click.native="hide"
                        >
                            <img
                                class=" mobile-logo"
                                src="../../assets/img/logo.svg"
                            />
                        </router-link>
                        <mobile-navigation-link
                            :label="$i18n.t('components.navigation.index')"
                            to="/Inicio"
                            @click.native="hide"
                        ></mobile-navigation-link>
                        <mobile-navigation-link
                            :label="
                                $i18n.t('components.navigation.appointments')
                            "
                            to="/Appointments"
                            @click.native="hide"
                        ></mobile-navigation-link>
                        <mobile-navigation-link
                            :label="$i18n.t('components.navigation.contactUs')"
                            to="/Contact"
                            @click.native="hide"
                        ></mobile-navigation-link>
                        <div class="menu-item-separator">
                            <hr />
                        </div>
                        <div class="mobile-navigation-user-link">
                            <router-link to="/" class="menu-title">
                                <b-icon pack="fas" icon="user"></b-icon>
                                {{ username }}
                            </router-link>
                        </div>
                        <div class="mobile-navigation-logout-link">
                            <router-link
                                to="/"
                                class="menu-title"
                                @click.native="signoff()"
                            >
                                <b-icon pack="fas" icon="sign-out-alt"></b-icon>
                                {{ $t('user.logof') }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </template>
        </transition>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';

import { GlobalState } from '../../vuex/store';

import MobileNavigationLink from '@/components/Navigation/MobileNavigationLink.vue';
import PIcon from '@/components/icons/PIcon.vue';

import { router } from '@/router';

@Component({
    name: 'MobileNavigationMenu',
    components: {
        MobileNavigationLink,
        PIcon,
    },
})
export default class MobileNavigationMenu extends Vue {
    private showModal: boolean = false;

    @State((state: GlobalState) => state.auth.user.name)
    private username: string;

    @Mutation('auth/unsetUser')
    private unsetUser;

    @Prop(Boolean) private show: boolean;

    private hide() {
        this.$emit('hide');
    }

    private signoff() {
        this.unsetUser();
        router.push('/');
    }
}
</script>

<style lang="scss" scoped>
a {
    color: #535353 !important;
}
hr {
    background-color: #0000007d !important;
    height: 1px !important;
}
.mobile-navigation-logout-link {
    display: block;
    padding: 5px 20px 15px 20px;
}
.mobile-navigation-user-link {
    display: block;
    padding: 15px 20px 15px 20px;
}
.menu-item-separator {
    padding: 49px 25px 0px 15px;
}
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
    z-index: 100;
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
    color: #000;
    font-size: 30px;
    cursor: pointer;
}
.mobile-logo {
    height: 154px;
    width: 154px;
}
</style>
