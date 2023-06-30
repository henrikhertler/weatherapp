import { fetchWeatherData } from '@/hooks/useWeatherData';
import { fetchLocationData } from '@/hooks/useLocationData';
import { DarkModeToggle } from '@/components/darkModeToggle';
import WeatherCard from '@/components/weatherCard';

export default async function Home() {
    const stuttgart = { lat: 48.7759, lng: 9.1829 };
    const initialWeatherData = await fetchWeatherData(stuttgart.lat, stuttgart.lng);
    const initialLocationData = await fetchLocationData(stuttgart.lat, stuttgart.lng);

    return (
        <main className='flex min-h-screen flex-col items-center justify-between light-bg dark:dark-bg'>
            <DarkModeToggle />
            <WeatherCard initialData={{ weather: initialWeatherData, location: initialLocationData }} />
        </main>
    );
}
