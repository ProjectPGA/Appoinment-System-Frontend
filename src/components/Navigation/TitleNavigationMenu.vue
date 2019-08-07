<template>
    <div>
        <div class="container has-text-centered">
            <img class="logo" src="../../assets/img/logo.svg" alt="" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component({
    name: 'TitleNavigationMenu',
})
export default class TitleNavigationMenu extends Vue {}
</script>

<style lang="scss" scoped>
.logo {
    width: 35%;
    @include mobile {
        width: 50%;
    }
}
</style>
