<template>
    <div>
        <section class="hero is-medium navigation-bar-content">
            <!-- Menú escritorio y Menu movil -->
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <mobile-navigation />
                        <desktop-navigation-menu />
                    </div>
                </nav>
            </div>
            <!-- Logo o titulo -->
            <div class="hero-body"><title-navigation-menu /></div>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

import MobileNavigation from './MobileNavigation.vue';
import DesktopNavigationMenu from './DesktopNavigationMenu.vue';
import TitleNavigationMenu from './TitleNavigationMenu.vue';

@Component({
    name: 'Navigationbar',
    components: {
        MobileNavigation,
        DesktopNavigationMenu,
        TitleNavigationMenu,
    },
})
export default class Navigationbar extends Vue {}
</script>

<style lang="scss" scoped>
.navigation-bar-content {
    background-color: #e4e4e4;
}
</style>
