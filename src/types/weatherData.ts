import { Daily, DailyUnits } from '@/types/daily';
import { Hourly, HourlyUnits } from '@/types/hourly';

export interface WeatherData {
    daily: Daily;
    daily_units: DailyUnits;
    hourly: Hourly;
    hourly_units: HourlyUnits;
}
