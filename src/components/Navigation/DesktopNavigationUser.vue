<template>
    <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
                <b-icon pack="fas" icon="user"></b-icon>
            </a>

            <div class="navbar-dropdown">
                <a class="navbar-item">
                    {{ $t('user.settings') }}
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                    <router-link
                        to="/"
                        class="menu-title"
                        @click.native="signoff()"
                    >
                        <b-icon pack="fas" icon="sign-out-alt"></b-icon>
                        {{ $t('user.logof') }}
                    </router-link>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';

import { GlobalState } from '../../vuex/store';

import DesktopNavigationLink from '@/components/Navigation/DesktopNavigationLink.vue';
import DesktopNavigationMenu from '@/components/Navigation/DesktopNavigationMenu.vue';
import RotateIcon from '@/components/Utils/RotateIcon.vue';
import { router } from '@/router';

@Component({
    name: 'DesktopNavigationUser',
    components: {
        RotateIcon,
    },
})
export default class DesktopNavigationUser extends Vue {
    @State((state: GlobalState) => state.auth.user.name)
    private username: string;

    @Mutation('auth/unsetUser') private unsetUser;

    private openUserMenu: boolean = false;

    private signoff() {
        this.unsetUser();
        router.push('/');
    }
}
</script>

<style lang="scss" scoped>
.navbar-item {
    color: #000;
    &:hover {
        .navbar-link {
            color: #000;
            background-color: #d5d5d5 !important;
        }
    }
}
.navbar-link {
    color: #000;
    &:after {
        border-color: #000 !important;
    }
}
.menu-title {
    color: #000;
}
.navbar-dropdown {
    right: 0;
    left: unset;
    border-top-left-radius: 6px;
}
</style>
