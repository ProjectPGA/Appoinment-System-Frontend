import { Appointment } from '@/models/appointment/Appointment';

export const appointDateCompare = (d: string) => {
    let result: boolean = false;
    let today: number = new Date().getTime();
    today = (today - (today % 100000000)) / 100000000;
    let date: number = new Date(d + ' 10:00:00').getTime();
    date = (date - (date % 100000000)) / 100000000;
    if (today > date) {
        result = false;
    }
    if (today <= date) {
        result = true;
    }
    return result;
};
