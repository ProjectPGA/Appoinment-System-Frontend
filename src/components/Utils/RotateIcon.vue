<template>
    <span :class="['icon', size]" @click="onClick">
        <i :class="[icon, 'rotate-icon', rotate && 'rotate-icon--rotate']"></i>
    </span>
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
        default: 'fas fa-chevron-down',
    })
    private icon: string;
    @Prop({
        type: String,
        validator: (val: string) => allowedSizes.includes(val),
        default: '',
    })
    private size: string;
    @Prop(Boolean) private rotate: boolean;

    private onClick(): void {
        this.$emit('click');
    }
}
</script>

<style lang="scss" scoped>
.rotate-icon {
    transition: transform 0.4s;
    &--rotate {
        transform: rotate(180deg);
    }
}
</style>
