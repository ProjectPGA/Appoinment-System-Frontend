<template>
    <div :class="['confirm', loading && 'confirm-disabled']">
        <h2 class="confirm-title">{{ title }}</h2>
        <h3 class="confirm-sub-title">
            {{ subTitle }}
        </h3>
        <div class="buttons">
            <b-button
                class="button is-primary accept"
                @click="accept"
                :loading="loading"
            >
                {{ acceptLabel }}
            </b-button>
            <b-button class="button is-primary cancel" @click="cancel">
                {{ cancelLabel }}
            </b-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    name: 'Confirm',
})
export default class Confirm extends Vue {
    @Prop(String) private title: string;
    @Prop(String) private subTitle: string;
    @Prop(String) private acceptLabel: string;
    @Prop(String) private cancelLabel: string;
    @Prop({
        type: Boolean,
        default: false,
    })
    private loading: boolean;

    private accept(): void {
        this.$emit('confirm', true);
    }

    private cancel(): void {
        this.$emit('confirm', false);
    }
}
</script>

<style scoped lang="scss">
.confirm {
    padding: 1.88rem 0;
    text-align: center;
}
.confirm-disabled {
    pointer-events: none;
    opacity: 0.9;
}
.confirm-title {
    font-size: 1.25rem;
    line-height: 1.44rem;
    margin-bottom: 0.25rem;
}
.confirm-sub-title {
    font-size: 0.95em;
    line-height: 1.06rem;
    color: $main-color-dark;
    margin-bottom: 2.19rem;
}
.buttons {
    display: flex;
    justify-content: center;
}
.button {
    min-width: 13.12rem;
    margin-right: 0.95em;
    margin-left: 0.95em;
    box-shadow: 0 0.12em 0.19em rgba(10, 10, 10, 0.1),
        0 0 0 0.01rem rgba(10, 10, 10, 0.1);
    color: #4a4a4a !important;
    @include mobile {
        min-width: auto;
    }
    &.accept {
        background-color: #53ff53 !important;
    }
    &.cancel {
        background-color: #ff6969 !important;
    }
}
</style>
