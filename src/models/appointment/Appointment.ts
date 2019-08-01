export interface Appointment {
    id: number;
    type: number;
    notes: string;
    free: boolean;
    date?: Date;
}

export interface Day {
    id: number;
    date?: Date;
    appointments?: Appointment[];
}
