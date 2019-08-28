export interface Appointment {
    id: number;
    type: number;
    notes: string;
    takerid: number;
}
export interface ViewAppointment {
    id: number;
    type: number;
    notes: string;
    takerid: number;
    date: string;
}

export interface Day {
    id: number;
    date: string;
    appointments: Appointment[];
}
