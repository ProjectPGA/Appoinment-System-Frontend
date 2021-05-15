<template>
    <font-awesome-icon
        @click="onClick"
        :icon="[iconPack, iconDisplay]"
        :size="iconSize"
        :class="['rotate-icon', rotate && 'rotate-icon--rotate']"
    />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

const allowedSizes = ['', 'is-small', 'is-medium', 'is-large'];

@Component({
    name: 'RotateIcon',
})
export default class RotateIcon extends Vue {
    @Prop({
        type: String,
        default: 'spinner',
    })
    private iconDisplay: string;
    @Prop({
        type: String,
        validator: (val: string) => allowedSizes.includes(val),
        default: '',
    })
    private iconSize: string;
    @Prop({
        type: String,
        default: 'fas',
    })
    private iconPack: string;
    @Prop(Boolean) private rotate: boolean;

    private onClick(): void {
        this.$emit('click');
    }
}
</script>

<style lang="scss" scoped>
.rotate-icon {
    transition: transform 0.4s;
    color: $main-color-dark;
    &--rotate {
        transform: rotate(180deg);
    }
}
</style>
