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
                                class="mobile-logo"
                                src="../../assets/img/logo.svg"
                            />
                        </router-link>
                        <mobile-navigation-link
                            :label="$t('components.navigation.index')"
                            to="/Inicio"
                            @click.native="hide"
                        />
                        <mobile-navigation-link
                            :label="$t('components.navigation.appointments')"
                            to="/Appointments"
                            @click.native="hide"
                        />
                        <mobile-navigation-link
                            :label="$t('components.navigation.contactUs')"
                            to="/Contact"
                            @click.native="hide"
                        />
                        <div class="menu-item-separator">
                            <hr />
                        </div>
                        <div class="mobile-navigation-user-link">
                            <collapse icon="fas fa-angle-down">
                                <template slot="collapse_title">
                                    <b-icon
                                        pack="fas"
                                        icon="globe"
                                        class="language-icon"
                                    ></b-icon>
                                    <span>
                                        {{ $t('titles.language') }}
                                    </span>
                                    <span class="current-language">
                                        ({{ currentLanguage }})
                                    </span>
                                </template>
                                <mobile-navigation-link
                                    label="languages.spanish"
                                    @click.native="changeLanguageToSpanish"
                                />
                                <mobile-navigation-link
                                    label="languages.english"
                                    @click.native="changeLanguageToEnglish"
                                />
                            </collapse>
                        </div>
                        <div class="mobile-navigation-user-link">
                            <router-link
                                to="/User"
                                class="menu-title"
                                @click.native="hide"
                            >
                                <b-icon pack="fas" icon="user" />
                                {{ username }}
                            </router-link>
                        </div>
                        <div class="mobile-navigation-user-link">
                            <router-link
                                to="/"
                                class="menu-title"
                                @click.native="logout()"
                            >
                                <b-icon pack="fas" icon="sign-out-alt" />
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

import authStore from '@/store/auth-store/AuthStore';
import mainStore from '@/store/main-store/MainStore';

import MobileNavigationLink from '@/components/Navigation/MobileNavigationLink.vue';
import PIcon from '@/components/icons/PIcon.vue';
import Collapse from '@/components/Utils/Collapse.vue';

@Component({
    name: 'MobileNavigationMenu',
    components: {
        MobileNavigationLink,
        PIcon,
        Collapse,
    },
})
export default class MobileNavigationMenu extends Vue {
    @Prop(Boolean) private show: boolean;

    private authStore = authStore.context(this.$store);
    private mainStore = mainStore.context(this.$store);

    private showModal: boolean = false;

    private changeLanguageToSpanish(): void {
        this.mainStore.actions.changeLanguageToSpanish();
    }

    private changeLanguageToEnglish(): void {
        this.mainStore.actions.changeLanguageToEnglish();
    }

    private get currentLanguage(): string | null {
        return this.mainStore.state.currentLanguage;
    }

    private logout(): void {
        this.authStore.actions.logout();
    }

    private get username(): string | null {
        return this.authStore.state.name;
    }

    private hide(): void {
        this.$emit('hide');
    }
}
</script>

<style lang="scss" scoped>
.current-language {
    text-transform: uppercase;
}
a {
    color: $main-color-dark !important;
}
hr {
    background-color: $main-color-dark !important;
    height: 1px !important;
}
.mobile-navigation-user-link {
    display: block;
    padding: 5px 20px 15px 20px;
}
.menu-item-separator {
    padding: 40px 25px 0px 15px;
    hr {
        height: 0.5px !important;
    }
}
.menu-container {
    position: fixed;
    overflow-y: auto;
    top: 0;
    bottom: 0;
    left: 0;
    left: 0;
    z-index: z('menu');
    background-color: $main-color-light;
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
    color: $main-color-dark;
    font-size: 30px;
    cursor: pointer;
}
.mobile-logo {
    height: 154px;
    width: 154px;
}
.language-icon {
    margin-right: 5px;
}
</style>
