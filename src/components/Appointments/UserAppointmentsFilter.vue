<template>
    <div>
        <div class="columns">
            <div class="column">
                <div></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'UserAppointmentsFilter',
    components: {},
})
export default class UserAppointmentsFilter extends Vue {}
</script>

<style lang="scss" scoped>
.column {
    border-bottom: 0.25em;
    border-color: black;
}
</style>
