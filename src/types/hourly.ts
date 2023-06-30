export interface Hourly {
    time: string[];
    temperature_2m: number[];
    relativehumidity_2m: number[];
    precipitation: number[];
    weathercode: number[];
    windspeed_10m: number[];
    is_day: number[];
}

export interface HourlyUnits {
    time: string;
    temperature_2m: string;
    relativehumidity_2m: string;
    precipitation: string;
    weathercode: string;
    windspeed_10m: string;
    is_day: string;
}
