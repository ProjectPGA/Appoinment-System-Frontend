import { ViewAppointment } from '@/models/appointment/Appointment';

export const appointDateCompare = (d: string): boolean => {
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

export const isActive = (d: string): string => {
    let result: string = '';
    let today: number = new Date().getTime();
    today = (today - (today % 100000000)) / 100000000;
    let date: number = new Date(d + ' 10:00:00').getTime();
    date = (date - (date % 100000000)) / 100000000;
    if (today <= date) {
        result = 'active';
    }
    if (today > date) {
        result = 'inactive';
    }
    return result;
};

export const getDay = (
    key: number,
    arg: string,
    citasView: ViewAppointment[]
): boolean => {
    return citasView[key].date.includes(arg);
};

export const getDayMonth = (date: string): string => {
    const fech: Date = new Date(date);
    let daymonth: string = '';
    const dia: number = fech.getDate();
    const mes: number = fech.getMonth();

    let mesString: string = '';

    switch (mes) {
        case 0:
            mesString = 'Enero';
            break;
        case 1:
            mesString = 'Febrero';
            break;
        case 2:
            mesString = 'Marzo';
            break;
        case 3:
            mesString = 'Abril';
            break;
        case 4:
            mesString = 'Mayo';
            break;
        case 5:
            mesString = 'Junio';
            break;
        case 6:
            mesString = 'Julio';
            break;
        case 7:
            mesString = 'Agosto';
            break;
        case 8:
            mesString = 'Septiembre';
            break;
        case 9:
            mesString = 'Octubre';
            break;
        case 10:
            mesString = 'Noviembre';
            break;
        case 11:
            mesString = 'Diciembre';
            break;
        default:
            break;
    }
    daymonth = dia + ' de ' + mesString;
    return daymonth;
};

export const getAppointHour = (type: number): string => {
    let hourString = '';
    switch (type) {
        case 1:
            hourString = '10:00';
            break;
        case 2:
            hourString = '10:20';
            break;
        case 3:
            hourString = '10:40';
            break;
        case 4:
            hourString = '11:00';
            break;
        case 5:
            hourString = '11:20';
            break;
        case 6:
            hourString = '11:40';
            break;
        case 7:
            hourString = '12:00';
            break;
        case 8:
            hourString = '12:20';
            break;
        case 9:
            hourString = '12:40';
            break;
        case 10:
            hourString = '13:00';
            break;
        case 11:
            hourString = '13:20';
            break;
        case 12:
            hourString = '13:40';
            break;
        case 13:
            hourString = '14:00';
            break;
        case 14:
            hourString = '17:00';
            break;
        case 15:
            hourString = '17:20';
            break;
        case 16:
            hourString = '17:40';
            break;
        case 17:
            hourString = '18:00';
            break;
        case 18:
            hourString = '18:20';
            break;
        case 19:
            hourString = '18:40';
            break;
        case 20:
            hourString = '19:00';
            break;
        case 21:
            hourString = '19:20';
            break;
        case 22:
            hourString = '19:40';
            break;
        case 23:
            hourString = '20:00';
            break;
        case 24:
            hourString = '20:20';
            break;
        case 25:
            hourString = '20:40';
            break;
        default:
            break;
    }

    return hourString;
};
