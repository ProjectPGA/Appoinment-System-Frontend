<template>
    <div>
        <div class="container has-text-centered">
            <h1 class="title">
                Title
            </h1>
            <h2 class="subtitle">
                Subtitle
            </h2>
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

<style lang="scss" scoped></style>
