<template>
    <div>
        <div id="navbarMenuDesktop" class="navbar-menu">
            <div class="navbar-end">
                <a class="navbar-item is-active">
                    {{ $t('navigation.index') }}
                </a>
                <a class="navbar-item"> {{ $t('navigation.appoinmets') }} </a>
                <a class="navbar-item"> {{ $t('navigation.contactUs') }} </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component({
    name: 'DesktopNavigationMenu',
})
export default class DesktopNavigationMenu extends Vue {}
</script>

<style lang="scss" scoped>
.navbar-end{
    a{
        color: black;
    }
}
</style>
