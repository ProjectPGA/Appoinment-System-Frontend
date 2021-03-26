<template>
    <!-- <content-appointments /> -->
    <div class="my-appoinments section">
        <div class="content-title">
            <h1 class="title">My appoinments</h1>
            <div class="content-switch">
                <span
                    class="is-flex is-align-self-center mr-4 switch-appoinments-label"
                >
                    Past appoinments
                </span>
                <b-switch
                    class="mr-0 switch-appoinments"
                    :value="true"
                    size="is-medium"
                    type="is-info"
                />
            </div>
        </div>
        <div class="is-mobile">
            <div
                class="card mb-3"
                v-for="items in 7"
                :key="items"
                :class="{
                    'is-ofline': items === 1,
                }"
            >
                <div class="card-content" scroll>
                    <div class="content columns is-mobile">
                        <div class="column is-6">
                            <p class="day-title">Miercoles</p>
                            <p>25 de agosto</p>
                            <p class="hour">09:15 - 10:30</p>
                        </div>
                        <div class="column is-6 type-appoinment">
                            <p>Corte normal + lavado</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-desktop columns is-multiline" id="container">
            <div class="column is-4" v-for="items in 7" :key="items">
                <div
                    class="card mb-3"
                    :class="{
                        'is-ofline': items === 1,
                    }"
                >
                    <div class="card-content" scroll>
                        <div class="content columns is-mobile">
                            <div class="column is-6">
                                <p class="day-title">Miercoles</p>
                                <p>25 de agosto</p>
                                <p class="hour">09:15 - 10:30</p>
                            </div>
                            <div class="column is-6 type-appoinment">
                                <p>Corte normal + lavado</p>
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

// import ContentAppointments from '@/components/Appointments/ContentAppointments.vue';

@Component({
    name: 'UserAppointments',
    components: {
        // ContentAppointments,
    },
})
export default class UserAppointments extends Vue {}
</script>

<style lang="scss" scoped>
.content-title {
    padding: 25px 0px;
    display: flex;
    justify-content: space-between;
    @include touch {
        display: block;
    }
    @include desktop {
        margin-bottom: 25px;
    }
    .title {
        margin-bottom: 0px;
        @include touch {
            margin-bottom: 70px;
        }
    }
}
.my-appoinments {
    padding: 25px;
}
.is-mobile {
    display: none;
    @include touch {
        display: unset;
    }
}
.is-desktop {
    @include touch {
        display: none;
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
}
.card {
    cursor: pointer;
    border-right: 25px solid #172b3a;
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
    margin-bottom: 0px !important;
    @include touch {
        font-size: 1.25rem;
    }
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
    font-size: 1.25rem;
    @include touch {
        font-size: 1.15rem;
    }
}
.type-appoinment {
    font-style: italic;
    text-align: right;
    display: flex !important;
    align-items: flex-end;
    justify-content: flex-end;
}
.content-switch {
    display: flex;
    align-content: center;
    justify-content: flex-end;
}
.switch-appoinments {
    /deep/.control-label {
        display: none;
    }
}
.switch-appoinments-label {
    font-size: 1.2rem;
}
</style>
