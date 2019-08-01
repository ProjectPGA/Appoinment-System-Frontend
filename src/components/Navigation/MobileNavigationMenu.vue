<template>
    <div>
        <div class="navbar-brand">
            <span
                id="navbarMenuMobile"
                class="navbar-burger burger"
                data-target="navbarMenuMobile"
            >
                <span></span> <span></span> <span></span>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component({
    name: 'MobileNavigationMenu',
})
export default class MobileNavigationMenu extends Vue {}
</script>

<style lang="scss" scoped></style>
