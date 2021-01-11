<template>
    <div class="container has-text-centered">
        <img class="logo" src="../../assets/img/logo.svg" alt="" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'LogoApp',
})
export default class LogoApp extends Vue {}
</script>

<style lang="scss" scoped>
.logo {
    width: 25%;
    @include mobile {
        width: 50%;
    }
}
</style>
