<template>
    <div>
        <contact-data />
        <contact-map />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import ContactData from '@/components/Contact/ContactData.vue';
import ContactMap from '@/components/Contact/ContactMap.vue';

@Component({
    name: 'Contact',
    components: {
        ContactData,
        ContactMap,
    },
})
export default class Contact extends Vue {}
</script>

<style lang="scss" scoped></style>
