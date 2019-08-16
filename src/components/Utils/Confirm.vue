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
    padding: 30px 0;
    text-align: center;
}
.confirm-disabled {
    pointer-events: none;
    opacity: 0.9;
}
.confirm-title {
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 4px;
}
.confirm-sub-title {
    font-size: 15px;
    line-height: 17px;
    color: #000000;
    margin-bottom: 35px;
}
.buttons {
    display: flex;
    justify-content: center;
}
.button {
    min-width: 150px;
    margin-right: 15px;
    margin-left: 15px;
    @include mobile {
        min-width: auto;
    }
    &.accept {
        background-color: #75ff3e !important;
    }
    &.cancel {
        background-color: #ff3e3e !important;
    }
}
</style>
