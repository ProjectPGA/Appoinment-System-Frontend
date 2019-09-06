<template>
    <div class="navbar-end">
        <desktop-navigation-language></desktop-navigation-language>
        <desktop-navigation-user></desktop-navigation-user>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';

import { GlobalState } from '../../vuex/store';

import DesktopNavigationUser from '@/components/Navigation/DesktopNavigationUser.vue';
import DesktopNavigationLanguage from '@/components/Navigation/DesktopNavigationLanguage.vue';

@Component({
    name: 'DesktopNavigationEnd',
    components: {
        DesktopNavigationUser,
        DesktopNavigationLanguage,
    },
})
export default class DesktopNavigationEnd extends Vue {}
</script>

<style lang="scss" scoped>
/deep/.navbar-item {
    color: #000;
    &:hover {
        .navbar-link {
            color: #000;
            background-color: #d5d5d5 !important;
        }
    }
}
/deep/.navbar-link {
    color: #000;
    &:after {
        border-color: #000 !important;
    }
}
/deep/.menu-title {
    color: #000;
}
/deep/.navbar-dropdown {
    right: 0;
    left: unset;
    border-top-left-radius: 6px;
}
</style>
