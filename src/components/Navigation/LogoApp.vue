<template>
    <div class="container has-text-centered">
        <img
            @click="toHome"
            class="logo"
            src="../../assets/img/logo.svg"
            alt=""
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'LogoApp',
})
export default class LogoApp extends Vue {
    private toHome(): void {
        this.$router.push('/');
    }
}
</script>

<style lang="scss" scoped>
.logo {
    width: 25%;
    cursor: pointer;
    @include mobile {
        width: 50%;
    }
}
</style>
