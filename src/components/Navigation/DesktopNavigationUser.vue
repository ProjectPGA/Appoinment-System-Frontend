<template>
    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
            <b-icon pack="fas" icon="user"></b-icon>
        </a>

        <div class="navbar-dropdown">
            <div class="navbar-item username-title">
                {{ username }}
            </div>
            <a class="navbar-item">
                <router-link to="/User" class="menu-title">
                    {{ $t('user.settings') }}
                </router-link>
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item">
                <router-link
                    to="/"
                    class="menu-title"
                    @click.native="signoff()"
                >
                    {{ $t('user.logof') }}
                </router-link>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';

import { GlobalState } from '../../vuex/store';

import { router } from '@/router';

@Component({
    name: 'DesktopNavigationUser',
})
export default class DesktopNavigationUser extends Vue {
    @State((state: GlobalState) => state.auth.user.name)
    private username: string;

    @Mutation('auth/unsetUser') private unsetUser;
    @Mutation('utils/unsetPastAppoints') private unsetPastAppoints;

    private openUserMenu: boolean = false;

    private signoff() {
        this.unsetUser();
        this.unsetPastAppoints();
        router.push('/');
    }
}
</script>

<style lang="scss" scoped>
.username-title {
    background-color: #d4d4d4;
    display: block;
    text-align: center;
    padding: 15px !important;
}
.navbar-dropdown {
    padding-top: 0px;
}
</style>
