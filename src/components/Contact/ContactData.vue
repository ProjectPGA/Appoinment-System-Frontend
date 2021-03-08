<template>
    <div class="contact-data">
        <div class="contact-data_section-container">
            <div class="contact-data_icon">
                <b-icon
                    pack="far"
                    icon="calendar-alt"
                    class="contact-data_icon-phone"
                />
            </div>
            <div class="contact-data_section">
                <div class="contact-data_title">
                    {{ $t('components.contact.titleSchedule') }}
                </div>
                <div>
                    {{ $t('components.contact.textMondayToFriday') }}
                </div>
                <div>
                    {{ $t('components.contact.textSaturday') }}
                </div>
            </div>
        </div>
        <div class="contact-data_section-container">
            <div class="contact-data_icon">
                <b-icon
                    pack="fas"
                    icon="phone"
                    class="contact-data_icon-phone"
                />
            </div>
            <div class="contact-data_section">
                <div class="contact-data_title">
                    {{ $t('components.contact.titlePhone') }}
                </div>
                <div>
                    {{ $t('components.contact.textPhone') }}
                </div>
            </div>
        </div>
        <div class="contact-data_section-container">
            <div class="contact-data_icon">
                <b-icon
                    pack="fas"
                    icon="map-marker-alt"
                    class="contact-data_icon-phone"
                />
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
    justify-content: space-around;
    align-items: center;
    height: 90vh;
    background-color: $main-color-light;
    padding: 2rem;
    font-size: 1.15rem;

    @include tablet-only {
        flex-direction: column;
    }
    @include mobile {
        flex-direction: column;
    }

    &_icon {
        display: flex;
        align-items: flex-start;
        justify-content: right;
        font-size: 2rem;
        min-height: 200px;
        color: $main-color;

        @include tablet-only {
            align-items: center;
        }
        @include mobile {
            align-items: center;
        }

        @include paddingY(2rem);
        @include paddingX(0.75rem);
    }

    &_section-container {
        display: flex;
        width: 100%;
        min-height: 200px;
        justify-content: center;
        flex-direction: row;
        color: $main-color-medium-dark;

        @include tablet-only {
            justify-content: flex-start;
            align-items: center;
        }
        @include mobile {
            justify-content: flex-start;
            align-items: center;
        }
    }

    &_section {
        padding: 1rem;
    }

    &_title {
        font-size: 2rem;
        display: flex;
        align-items: flex-start;
    }
}
</style>
