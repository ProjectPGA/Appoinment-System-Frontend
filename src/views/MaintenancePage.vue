<template>
    <div class="maintenance-page">
        <div class="maintenance-page_image-container">
            <img
                class="maintenance-page_image-container_image"
                src="../assets/img/maintenance-image-1080x720.svg"
                alt="Maintenance Page Image"
            />
        </div>
        <div class="maintenance-page_text-container">
            <h1 class="maintenance-page_text-container_title">
                {{ $t('maintenance.title') }}
            </h1>
            <h2 class="maintenance-page_text-container_subtitle">
                {{ $t('maintenance.subtitle') }}
            </h2>
        </div>
        <button-translation></button-translation>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ButtonTranslation from '@/components/Login/ButtonTranslation.vue';

@Component({
    name: 'MaintenancePage',
    components: {
        ButtonTranslation,
    },
})
export default class MaintenancePage extends Vue {}
</script>

<style lang="scss" scoped>
.maintenance-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &_image-container {
        margin: 5rem 0 1.5rem 0;

        &_image {
            width: 45rem;
            @include mobile {
                width: 15rem;
            }
        }
    }

    &_text-container {
        text-align: center;
        color: var(--blue-sapphire);

        &_title {
            font-size: 3.5rem;
            font-weight: bold;
            margin: 0 1.25rem;
            text-shadow: 1px 1px var(--gunmetal);

            @include mobile {
                font-size: 2rem;
            }
        }

        &_subtitle {
            font-size: 2.5rem;
            margin: 1rem 1.5rem;

            @include mobile {
                font-size: 1.5rem;
            }
        }
    }
}
</style>
