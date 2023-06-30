export interface Daily {
    time: string[];
    precipitation_sum: number[];
    precipitation_hours: number[];
}

export interface DailyUnits {
    time: string;
    precipitation_sum: string;
    precipitation_hours: string;
}
