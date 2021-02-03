<template>
    <div class="maintenance-page-container">
        <div class="maintenance-image-container">
            <img
                class="maintenance-image"
                src="../assets/img/maintenance-image-1080x720.svg"
                alt=""
            />
        </div>
        <div class="maintenance-text-container">
            <h2 class="maintenance-title">{{ $t('maintenance.title') }}</h2>
            <p class="maintenance-subtitle">{{ $t('maintenance.subtitle') }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'MaintenancePage',
})
export default class MaintenancePage extends Vue {}
</script>

<style lang="scss" scoped>
.maintenance-page-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.maintenance-image-container {
    margin: 5rem 0 1.5rem 0;
}

.maintenance-image {
    width: 40rem;

    @include mobile {
        width: 15rem;
    }
}

.maintenance-text-container {
    text-align: center;
    color: var(--blue-sapphire);
}

.maintenance-title {
    font-size: 3.5rem;
    font-weight: bold;
    margin: 0 1.25rem;
    text-shadow: 1px 1px var(--gunmetal);

    @include mobile {
        font-size: 2rem;
    }
}

.maintenance-subtitle {
    font-size: 2.5rem;
    margin: 1rem 1.5rem;

    @include mobile {
        font-size: 1.5rem;
    }
}
</style>
