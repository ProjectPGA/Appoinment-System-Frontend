<template>
    <b-modal
        :active="active"
        width="100%"
        scroll="keep"
        :has-modal-card="true"
        :can-cancel="canCancelValue"
        @close="onClose"
    >
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title"><slot name="modal_title"></slot></p>
                <button
                    class="close-button"
                    @click="onClose"
                    aria-label="close"
                    data-cy="modal-close-btn"
                    v-if="canCancel"
                >
                    <i class="fa fa-times"></i>
                </button>
            </header>
            <div class="modal-card-body"><slot></slot></div>
            <div class="modal-card-footer" v-if="hasFooter">
                <slot name="modal_footer"></slot>
            </div>
        </div>
    </b-modal>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    name: 'Modal',
})
export default class Modal extends Vue {
    @Prop(Boolean) private active: boolean;
    @Prop({
        type: Boolean,
        default: true,
    })
    private canCancel: boolean;

    private onClose(): void {
        this.$emit('update:active', false);
    }

    get canCancelValue(): boolean | string[] {
        return this.canCancel ? ['escape', 'outside'] : false;
    }

    get hasFooter(): boolean {
        return !!this.$slots.modal_footer;
    }
}
</script>

<style lang="scss" scoped>
.modal {
    @include mobile {
        flex-direction: row;
    }
}
.modal.is-large {
    .modal-card {
        width: 90vw;
        max-width: 940px;

        @include mobile {
            width: calc(100vw - 20px);
        }

        @include widescreen {
            width: 80vw;
        }

        @include fullhd {
            width: 70vw;
        }
    }
}
.modal.modal-card-content-paddingless {
    .modal-card-body {
        padding: 0;
    }
}
.modal-card {
    @include mobile {
        width: calc(100vw - 20px);
    }
}
.modal-card-title {
    font-size: 20px;
    line-height: 23px;
    color: #c5c5c5;
}
.modal-card-body {
    font-size: 15px;
    line-height: 19px;
    color: #000000;
}
.modal-card-footer {
    box-shadow: 0 0px 25px 0 rgba(0, 0, 0, 0.35);
    background-color: white;
    padding: 26px 0;

    @include mobile {
        padding: 13px 0 26px 0;
    }
}

.close-button {
    border: none;
    background: transparent;
    font-size: 1.2rem;
    color: #c9c9c9;
    cursor: pointer;
}
</style>
