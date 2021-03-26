<template>
    <div class="home">
        <!-- <header-app /> -->
        <!-- <router-view />
        <content-home v-if="$route.name == 'Home'" /> -->
        <h1 class="title mb-6">Appoinments</h1>

        <b-icon
            pack="fas"
            class="icon-right"
            icon="chevron-left"
            size="is-large"
            v-scroll-to="{
                el: '#day-1-week-1',
                container: '#container',
                x: true,
                y: false,
                force: true,
            }"
        />
        <b-icon
            pack="fas"
            class="icon-left"
            icon="chevron-right"
            size="is-large"
            v-scroll-to="{
                el: element,
                container: '#container',
                easing: 'ease',
                onDone: test,
                x: true,
                y: false,
                force: true,
            }"
        />
        <div class="is-mobile">
            <h2 class="subtitle">
                <span class="day-title">Miercoles</span> 25 de agosto
            </h2>
            <div
                class="card mb-3"
                v-for="items in 15"
                :key="items"
                :class="{
                    'is-available': items === 2,
                    'is-taken': items === 3,
                    'is-ofline': items === 4,
                }"
            >
                <div class="card-content" scroll>
                    <div class="content">
                        <p class="hour">09:15 - 10:30</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-desktop" id="container">
            <div class="columns" v-for="week in 8" :key="week">
                <div
                    class="column is-2"
                    v-for="day in 6"
                    :key="day"
                    :id="`day-${day}-week-${week}`"
                >
                    <h2 class="subtitle">
                        <span class="day-title">Martes</span> 25 de agosto
                    </h2>
                    <div
                        class="card mb-3"
                        v-for="hour in 15"
                        :key="hour"
                        :class="{
                            'is-available': hour === 2,
                            'is-taken': hour === 3,
                            'is-ofline': hour === 4,
                        }"
                    >
                        <div class="card-content">
                            <div class="content">
                                <p class="hour">09:15 - 10:30</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import authStore from '@/store/auth-store/AuthStore';

import HeaderApp from '@/components/Navigation/Header.vue';
import ContentHome from '@/components/Home/ContentHome.vue';

@Component({
    name: 'Home',
    components: {
        HeaderApp,
        ContentHome,
    },
})
export default class Home extends Vue {
    private authStore = authStore.context(this.$store);

    private initialWeek: number = 2;
    private element: string = `#day-1-week-${this.initialWeek}`;

    private get isLogged(): boolean {
        return this.authStore.state.isLogged;
    }

    private renewToken(): void {
        this.authStore.actions.renewToken();
    }

    private mounted(): void {
        this.authStore.actions.disableRegisterProcess();
        setInterval(this.renewToken, 300000);
    }
    private test(): void {
        this.initialWeek++;
        this.element = `#day-1-week-${this.initialWeek}`;
    }
}
</script>

<style lang="scss">
.is-mobile {
    display: none;
    @include touch {
        display: unset;
    }
}
.is-desktop {
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    height: 1550px;

    @include touch {
        display: none;
    }
    .columns {
        min-height: 100vh;
        min-width: calc(100vw - 135px);
        background-repeat: no-repeat;
        background-size: cover;
        padding: 25px;
    }
}
.is-available {
    border-right: 25px solid #48c774 !important;
}
.is-taken {
    border-right: 25px solid #172b3a !important;
}
.is-ofline {
    cursor: not-allowed;
    background-color: #ccc !important;
    border-right: unset !important;
}
.card {
    cursor: pointer;
    border-right: 25px solid #e01f2f;
}
.home {
    padding: 25px 70px;
}
.title {
    text-align: center;
}
.subtitle {
    font-weight: 500 !important;
}
.day-title {
    font-weight: 900 !important;
    font-size: 1.6rem;
    margin-right: 5px;
}
.icon-right {
    position: fixed;
    left: 10px;
    top: 50%;
    z-index: 2000;
    color: #ccc;
    &:hover {
        color: black;
    }
}
.icon-left {
    position: fixed;
    right: 10px;
    top: 50%;
    z-index: 2000;
    color: #ccc;
    &:hover {
        color: black;
    }
}
.hour {
    font-size: 1.75rem;
    @include desktop {
        font-size: 1.1rem;
    }
}
</style>
