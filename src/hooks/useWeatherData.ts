import { useQuery } from '@tanstack/react-query';
import { WeatherData } from '@/types/weatherData';

export const fetchWeatherData = async (latitude: number, longitude: number): Promise<WeatherData> => {
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m,is_day&daily=precipitation_sum,precipitation_hours&timezone=Europe%2FBerlin`,
    );
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    return await response.json();
};

export function useWeatherData(latitude: number, longitude: number, initialData?: WeatherData) {
    return useQuery({
        queryKey: ['weatherData', latitude, longitude],
        queryFn: () => fetchWeatherData(latitude, longitude),
        initialData,
    });
}
