<template>
    <div>
        <p class="title">{{ $t(title) }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    name: 'TitlesApp',
})
export default class TitlesApp extends Vue {
    @Prop() private title: string;
}
</script>

<style lang="scss" scoped>
.title {
    font-family: 'Libre Franklin';
    text-align: center;
    font-size: 3em;
    background-color: $main-color-light;
}
</style>
