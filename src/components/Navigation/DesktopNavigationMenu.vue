<template>
    <div class="navbar-start">
        <desktop-navigation-link
            label="components.navigation.index"
            to="/Inicio"
        ></desktop-navigation-link>
        <desktop-navigation-link
            label="components.navigation.appointments"
            to="/Appointments"
        ></desktop-navigation-link>
        <desktop-navigation-link
            label="components.navigation.contactUs"
            to="/Contact"
        ></desktop-navigation-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import DesktopNavigationLink from '@/components/Navigation/DesktopNavigationLink.vue';

@Component({
    name: 'DesktopNavigationMenu',
    components: {
        DesktopNavigationLink,
    },
})
export default class DesktopNavigationMenu extends Vue {}
</script>

<style lang="scss" scoped></style>
