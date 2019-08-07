<template>
    <b-message class="is-success" v-show="isActive" has-icon>
        {{ Text }}
    </b-message>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    name: 'MessageText',
})
export default class MessageText extends Vue {
    @Prop(String) private Text: string;
    @Prop(Boolean) private isActive: boolean;
}
</script>

<style lang="scss" scoped>
.mobile-navigation-link {
    display: block;
    padding: 23px 20px;
}
.mobile-navigation-link:hover {
    background-color: rgba(255, 255, 255, 0.12);
    width: 100%;
    height: 100%;
    cursor: pointer;
}
.mobile-navigation-icon {
    color: white !important;
}
.mobile-navigation-label {
    font-size: $size-normal;
    color: white !important;
}
</style>
