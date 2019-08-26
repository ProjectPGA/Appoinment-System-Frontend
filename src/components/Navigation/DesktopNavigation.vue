<template>
    <div>
        <div id="navbarMenuDesktop" class="navbar-menu">
            <div class="navbar-end">
                <desktop-navigation-link
                    label="components.navigation.index"
                    to="/Inicio"
                ></desktop-navigation-link>
                <desktop-navigation-link
                    label="components.navigation.appoinmets"
                    to="/Appointments"
                ></desktop-navigation-link>
                <desktop-navigation-link
                    label="components.navigation.contactUs"
                    to="/Contact"
                ></desktop-navigation-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

import DesktopNavigationLink from '@/components/Navigation/DesktopNavigationLink.vue';

@Component({
    name: 'DesktopNavigationMenu',
    components: {
        DesktopNavigationLink,
    },
})
export default class DesktopNavigationMenu extends Vue {}
</script>

<style lang="scss" scoped>
.navbar-end {
    a {
        color: black;
    }
}
</style>
