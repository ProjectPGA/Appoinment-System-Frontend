<template>
    <div>
        <section class="hero is-medium navigation-bar-content">
            <!-- Menú escritorio y Menu movil -->
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <mobile-navigation-menu />
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

import MobileNavigationMenu from './MobileNavigationMenu.vue';
import DesktopNavigationMenu from './DesktopNavigationMenu.vue';
import TitleNavigationMenu from './TitleNavigationMenu.vue';

@Component({
    name: 'Navigationbar',
    components: {
        MobileNavigationMenu,
        DesktopNavigationMenu,
        TitleNavigationMenu,
    },
})
export default class Navigationbar extends Vue {}
</script>

<style lang="scss" scoped>
.navigation-bar-content{
    background-color: #000000;
}
</style>
