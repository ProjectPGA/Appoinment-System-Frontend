<template>
    <div id="navbarMenuDesktop" class="navbar-menu">
        <desktop-navigation-menu></desktop-navigation-menu>
        <desktop-navigation-end></desktop-navigation-end>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import DesktopNavigationMenu from '@/components/Navigation/DesktopNavigationMenu.vue';
import DesktopNavigationEnd from '@/components/Navigation/DesktopNavigationEnd.vue';

@Component({
    name: 'DesktopNavigation',
    components: {
        DesktopNavigationEnd,
        DesktopNavigationMenu,
    },
})
export default class DesktopNavigation extends Vue {}
</script>

<style lang="scss" scoped></style>
