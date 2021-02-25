<template>
    <div class="maintenance-page">
        <div class="maintenance-page_image-container">
            <div class="maintenance-page_image-container_image">
                <img
                    :src="require(`../../assets/img/${urlImage}`)"
                    alt="Maintenance Page Image"
                />
            </div>
        </div>
        <div class="maintenance-page">
            <div class="maintenance-page_text-container">
                <h1 class="maintenance-page_text-container_title">
                    {{ title }}
                </h1>
                <h2 class="maintenance-page_text-container_subtitle">
                    {{ subtitle }}
                </h2>
            </div>
            <button-translation />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import ButtonTranslation from '@/components/common/ButtonTranslation.vue';

@Component({
    name: 'MaintenanceLayout',
    components: {
        ButtonTranslation,
    },
})
export default class MaintenanceLayout extends Vue {
    @Prop(String) private title: string;
    @Prop(String) private subtitle: string;
    @Prop(String) private urlImage: string;
}
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
