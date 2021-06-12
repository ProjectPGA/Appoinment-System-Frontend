<template>
  <div>
    <!-- <titles-app
            class="container-appoinments-title"
            title="titles.appointments"
        ></titles-app>
        <div class="columns pagination-container">
            <div class="column">
                <b-pagination
                    :total="total()"
                    :current.sync="current"
                    :per-page="getPerPage()"
                    size="is-large"
                >
                </b-pagination>
            </div>
        </div>
        <div class="columns appoinments-container">
            <div class="column">
                <main-schedule :daysFiltered="paginatedItems()" />
            </div>
        </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import { State, Action, Mutation } from 'vuex-class';
// // TODO: Refactor Store
// // import { GlobalState } from '@/vuex/store';

// import MainSchedule from './MainSchedule.vue';
// import { Day } from '@/models/appointment/Appointment';
// import TitlesApp from '@/components/Home/TitlesApp.vue';

@Component({
  name: 'MainFilterFrame',
  components: {
    // MainSchedule,
    // TitlesApp,
  },
})
export default class MainFilterFrame extends Vue {
  // @State((state: GlobalState) => state.appointment.days) private days: Day[];
  // @Action('appointment/fetchData') private fetchData: () => void;
  // private daysFiltered: Day[] = [];
  // private current: number = 1;
  // private created() {
  //     this.datosPrincipal();
  // }
  // private datosPrincipal() {
  //     this.cargarDatos().then(() => {
  //         this.sliceDatos();
  //     });
  // }
  // private sliceDatos() {
  //     const week: string[] = [];
  //     let j: number = 30;
  //     // Fill "week" array with the next 30 days counting from the current day, and delete the ones that includes "Sundays"
  //     for (let i = 0; i <= j; i++) {
  //         const fech = new Date();
  //         fech.setDate(fech.getDate() + i);
  //         week[i] = fech.toDateString();
  //         if (week[i].includes('Sun')) {
  //             week.splice(i);
  //             fech.setDate(fech.getDate() + 1);
  //             week[i] = fech.toDateString();
  //             i++;
  //             j++;
  //         }
  //     }
  //     // Compare the 30 days (excluding Sundays) of "week" and add the ones that match
  //     for (let i = 0; i < this.days.length; i++) {
  //         for (let k = 0; k < week.length; k++) {
  //             if (new Date(this.days[i].date).toDateString() === week[k]) {
  //                 this.daysFiltered.push(this.days[i]);
  //             }
  //         }
  //     }
  //     // Removes half of appoints (first (morning): 12 / second half(afternoon): 12)
  //     for (let i = 0; i < this.daysFiltered.length; i++) {
  //         if (new Date(this.days[i].date).toDateString().includes('Sat')) {
  //             this.days[i].appointments.splice(12, 12);
  //         }
  //     }
  // }
  // private async cargarDatos(): Promise<any> {
  //     return await this.fetchData();
  // }
  // private total(): number {
  //     return this.daysFiltered.length;
  // }
  // private getPerPage(): number {
  //     if (this.notMobile) {
  //         return 6;
  //     } else {
  //         return 1;
  //     }
  // }
  // private paginatedItems(): Day[] {
  //     const pageNumber = this.current - 1;
  //     return this.daysFiltered.slice(
  //         pageNumber * this.getPerPage(),
  //         (pageNumber + 1) * this.getPerPage()
  //     );
  // }
  // private customFilter(prev: number, next: number): Day[] {
  //     return this.daysFiltered;
  // }
  // get notMobile(): boolean {
  //     return this.$mq === 'xl';
  // }
}
</script>

<style lang="scss" scoped>
.appoinments-container {
  padding: 1em 2.5em 0em 2em;
}
.pagination-container {
  padding: 1em 2em 0em 2em;
}
/deep/ .pagination-list {
  display: none;
}
/deep/ .pagination-next {
  width: 50%;
  @include mobile {
    width: 25%;
  }
}
/deep/ .pagination-previous {
  width: 50%;
  @include mobile {
    width: 25%;
  }
}
.container-appoinments-title {
  font-size: 2em;
  padding: 2em;
  @include mobile {
    font-size: 1em;
  }
}
</style>
