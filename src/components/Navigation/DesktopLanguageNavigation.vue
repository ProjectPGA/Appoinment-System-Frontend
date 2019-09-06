<template>
    <a class="navbar-item">
        <router-link to="/" class="menu-title">
            <b-icon pack="fas" icon="globe"></b-icon>
            {{ $t('components.navigation.language') }}
        </router-link>
    </a>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'DesktopLanguageNavigation',
})
export default class DesktopLanguageNavigation extends Vue {}
</script>

<style lang="scss" scoped>
.menu-title {
    color: #000;
}
</style>
