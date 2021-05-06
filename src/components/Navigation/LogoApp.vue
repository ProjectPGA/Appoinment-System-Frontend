<template>
    <div class="container has-text-centered">
        <img
            height="115"
            width="340"
            @click="toHome"
            class="logo"
            src="../../assets/img/logo.svg"
            :alt="$t('titles.altImage')"
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
        if (this.$route.path !== '/') {
            this.$router.push('/');
        }
    }
}
</script>

<style lang="scss" scoped>
.logo {
    cursor: pointer;
    @include mobile {
        width: 50%;
        height: 50%;
    }
}
</style>
