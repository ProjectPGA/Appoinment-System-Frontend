<template>
    <div>
        <section class="hero is-small navigation-bar-content">
            <!-- Menú escritorio y Menu movil -->
            <div class="hero-head">
                <nav
                    c
                    class="navbar"
                    role="navigation"
                    aria-label="main navigation"
                >
                    <mobile-navigation />
                    <desktop-navigation />
                </nav>
            </div>
            <!-- Logo o titulo -->
            <div class="hero-body"><logo-app /></div>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import MobileNavigation from './MobileNavigation.vue';
import DesktopNavigation from './DesktopNavigation.vue';
import LogoApp from './LogoApp.vue';

@Component({
    name: 'Navigationbar',
    components: {
        MobileNavigation,
        DesktopNavigation,
        LogoApp,
    },
})
export default class Navigationbar extends Vue {}
</script>

<style lang="scss" scoped>
.navigation-bar-content {
    background-color: $main-color-light;
}
.hero-body {
    padding-bottom: 5.5rem !important;
}
</style>
