<template>
    <div>
        <div class="columns custom-padding">
            <div class="column">
                <b-pagination
                    :total="total()"
                    :current.sync="current"
                    :per-page="getPerPage()"
                >
                </b-pagination>
            </div>
        </div>
        <div class="columns custom-padding">
            <div class="column">
                <MainSchedule :daysFiltered="paginatedItems()" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { GlobalState } from '@/vuex/store';

import MainSchedule from './MainSchedule.vue';
import { Day } from '@/models/appointment/Appointment';

@Component({
    name: 'MainFilterFrame',
    components: {
        MainSchedule,
    },
})
export default class MainFilterFrame extends Vue {
    @State((state: GlobalState) => state.appointment.days) private days: Day[];

    @Action('appointment/fetchData') private fetchData: () => void;

    private daysFiltered: Day[] = [];
    private current: number = 1;

    private created() {
        this.cargarDatos().then((resp: void) => {
            const week: string[] = [];
            let j: number = 30;

            for (let i = 0; i <= j; i++) {
                const fech = new Date();
                fech.setDate(fech.getDate() + i);
                week[i] = fech.toDateString();
                if (week[i].includes('Sun')) {
                    week.splice(i);
                    fech.setDate(fech.getDate() + 1);
                    week[i] = fech.toDateString();
                    i++;
                    j++;
                }
            }
            for (let i = 0; i < this.days.length; i++) {
                for (let k = 0; k < week.length; k++) {
                    if (this.days[i].date === week[k]) {
                        this.daysFiltered.push(this.days[i]);
                    }
                }
            }
        });
    }
    private async cargarDatos(): Promise<any> {
        return await this.fetchData();
    }
    private total(): number {
        return this.daysFiltered.length;
    }
    private getPerPage(): number {
        if (this.notMobile) {
            return 5;
        } else {
            return 1;
        }
    }
    private paginatedItems(): Day[] {
        const pageNumber = this.current - 1;

        return this.daysFiltered.slice(
            pageNumber * this.getPerPage(),
            (pageNumber + 1) * this.getPerPage()
        );
    }

    private customFilter(prev: number, next: number): Day[] {
        return this.daysFiltered;
    }

    get notMobile(): boolean {
        return this.$mq === 'xl';
    }
}
</script>

<style lang="scss" scoped>
.custom-padding {
    padding: 4.5rem;
}
</style>
