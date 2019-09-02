<template>
    <div>
        <content-profile></content-profile>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import ContentProfile from '@/components/User/ContentProfile.vue';

@Component({
    name: 'User',
    components: {
        ContentProfile,
    },
})
export default class User extends Vue {}
</script>

<style lang="scss" scoped>
</style>
