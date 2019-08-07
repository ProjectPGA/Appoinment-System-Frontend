export interface Appointment {
    id: number;
    type: number;
    notes: string;
    takerid: number;
}

export interface Day {
    id: number;
    date: string;
    appointments: Appointment[];
}
