<template>
    <div>
        <a href="tel:34679938186" class="float" target="_blank">
            <i class="fas fa-phone my-float"></i>
        </a>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'CallButton',
})
export default class CallButton extends Vue {}
</script>

<style lang="scss" scoped>
.float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 20px;
    left: 20px;
    background-color: #2550d3;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
}
.my-float {
    margin-top: 16px;
    font-family: 'FontAwesome';
}
</style>
