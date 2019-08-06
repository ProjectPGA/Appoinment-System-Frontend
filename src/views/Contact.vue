<template>
    <div>
        <div class="content-contact">
            <div class="columns is-multiline">
                <div class="column"><contact-data /></div>
                <div class="column"><contact-map /></div>
            </div>
        </div>
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

<style lang="scss" scoped>
.content-contact {
    padding: 1rem;
    .columns {
        min-height: calc(100vh - #{$p-header-height});
    }
}
</style>
