<template>
    <div>
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
                class="column is-one-quarter has-text-right has-no-vertical-padding is-left-paddingless"
            >
                <router-view name="mobileNavBar"></router-view>
            </div>
        </div>
        <mobile-navigation-menu
            :show="show"
            @hide="hideMenu"
        ></mobile-navigation-menu>
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
    color: white !important;
    margin-left: 0;
}
.is-centered {
    display: flex;
    justify-content: center;
    align-items: center;
}
.navbar-title {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2.95px;
    line-height: 21px;

    a {
        color: white;
    }
}
.left-icon {
    margin-left: 15px;
}
.left-icon,
.navbar-title {
    color: white;
    cursor: pointer;
}
.is-left-paddingless {
    padding-left: 0;
}
</style>
