<template>
    <div class="contact-data">
        <div class="contact-data_section-container">
            <div class="contact-data_section">
                <div class="contact-data_title">
                    {{ $t('components.contact.titleScheddive') }}
                </div>
                <div>
                    {{ $t('components.contact.textMondayToFriday') }}
                </div>
                <div>
                    {{ $t('components.contact.textSaturday') }}
                </div>
            </div>
            <div class="contact-data_section">
                <div class="contact-data_title">
                    {{ $t('components.contact.titlePhone') }}
                </div>
                <div>
                    {{ $t('components.contact.textPhone') }}
                </div>
            </div>
            <div class="contact-data_section">
                <div class="contact-data_title">
                    {{ $t('components.contact.titleAddress') }}
                </div>
                <div>
                    {{ $t('components.contact.textAddress') }}
                </div>
                <div>
                    {{ $t('components.contact.textCity') }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LogoApp from '@/components/Navigation/LogoApp.vue';
import TitlesApp from '@/components/Home/TitlesApp.vue';

@Component({
    name: 'ContactData',
    components: {
        LogoApp,
        TitlesApp,
    },
})
export default class ContactData extends Vue {}
</script>

<style lang="scss" scoped>
.contact-data {
    display: flex;
    align-items: center;
    height: 90vh;
    background-color: $main-color-light;
    padding: 2rem;
    font-size: 1.15rem;

    &_section-container {
        display: flex;
        width: 100%;
        justify-content: space-around;
        flex-direction: row;
        color: $main-color-medium-dark;

        @include mobile {
            flex-direction: column;
        }
    }

    // &_section {
    //     padding: 1rem;
    // }

    &_title {
        font-size: 2rem;
    }
}
</style>
