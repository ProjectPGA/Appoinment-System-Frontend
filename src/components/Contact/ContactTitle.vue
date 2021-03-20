<template>
    <div class="contact-title">
        <titles-app title="titles.contact" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import TitlesApp from '@/components/Home/TitlesApp.vue';

@Component({
    name: 'ContactTitle',
    components: {
        TitlesApp,
    },
})
export default class ContactTitle extends Vue {}
</script>

<style lang="scss" scoped>
.contact-title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 15vh;
    background-color: $main-color-light;

    @include tablet-only {
        height: 20vh;
    }
    @include mobile {
        height: 20vh;
    }
}
</style>
