import { useQuery } from '@tanstack/react-query';

const fetchWeatherData = async (latitude: number, longitude: number) => {
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max&forecast_days=1&timezone=Europe%2FBerlin`,
    );
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    return response.json();
};

export function useWeatherData(latitude: number, longitude: number) {
    return useQuery({
        queryKey: ['weatherData', latitude, longitude],
        queryFn: () => fetchWeatherData(latitude, longitude),
    });
}
