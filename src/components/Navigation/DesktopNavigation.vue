<template>
    <div id="navbarMenuDesktop" class="navbar-menu">
        <desktop-navigation-menu></desktop-navigation-menu>
        <desktop-navigation-user></desktop-navigation-user>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import DesktopNavigationMenu from '@/components/Navigation/DesktopNavigationMenu.vue';
import DesktopNavigationUser from '@/components/Navigation/DesktopNavigationUser.vue';

@Component({
    name: 'DesktopNavigation',
    components: {
        DesktopNavigationUser,
        DesktopNavigationMenu,
    },
})
export default class DesktopNavigation extends Vue {}
</script>

<style lang="scss" scoped></style>
