<template>
    <div class="navbar-brand">
        <div class="columns is-mobile is-vcentered">
            <div class="column is-one-quarter has-no-vertical-padding">
                <a
                    role="button"
                    class="navbar-burger burger"
                    aria-label="menu"
                    @click="showMenu"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div
                class="
                    column
                    is-one-quarter
                    has-text-right has-no-vertical-padding
                    is-left-paddingless
                "
            >
                <router-view name="mobileNavBar" />
            </div>
        </div>
        <mobile-navigation-menu :show="show" @hide="hideMenu" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import MobileNavigationMenu from './MobileNavigationMenu.vue';

@Component({
    name: 'MobileNavBar',
    components: {
        MobileNavigationMenu,
    },
})
export default class MobileNavBar extends Vue {
    private show: boolean = false;

    private showMenu() {
        this.show = true;
    }

    private hideMenu() {
        this.show = false;
    }
}
</script>

<style lang="scss" scoped>
.navbar-burger {
    color: $main-color-dark !important;
    margin-left: 0;
}
.is-centered {
    display: flex;
    justify-content: center;
    align-items: center;
}
.navbar-title {
    font-size: 1.12rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    line-height: 2.01rem;

    a {
        color: $main-color-light;
    }
}
.left-icon {
    margin-left: 0.95em;
}
.left-icon,
.navbar-title {
    color: $main-color-light;
    cursor: pointer;
}
.is-left-paddingless {
    padding-left: 0;
}
</style>
