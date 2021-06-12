<template>
    <div>
        <a href="https://wa.me/34679938186" class="float" target="_blank">
            <i class="fa fa-whatsapp my-float"></i>
        </a>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'WhatsappButton',
})
export default class WhatsappButton extends Vue {}
</script>

<style lang="scss" scoped>
.float {
    position: fixed;
    width: 3.75rem;
    height: 3.75rem;
    bottom: 1.25rem;
    right: 1.25rem;
    background-color: #25d366;
    color: #fff;
    border-radius: 3.12rem;
    text-align: center;
    font-size: 1.88rem;
    box-shadow: 0.12em 0.12em 0.19em #999;
    z-index: 100;
}
.my-float {
    margin-top: 1em;
    font-family: 'FontAwesome';
}
</style>
