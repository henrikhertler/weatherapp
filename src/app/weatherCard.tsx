'use client';

import { useWeatherData } from '@/hooks/useWeatherData';

export default function WeatherCard() {
    const { data, isLoading, isError } = useWeatherData(52.52, 13.41);

    if (isError) {
        console.log('Error...');
    }

    if (isLoading) {
        console.log('Loading...');
    }

    console.log(data);

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='bg-white rounded-xl p-6 w-1/5 sm:w-full'>
                <h1 className='flex items-center text-2xl font-bold'>Location</h1>
                <p className='text-gray-600 mt-2'>{data.daily.time[0]}</p>
                <h2 className='text-6xl font-bold mt-4'>
                    {data.daily.temperature_2m_max[0]}
                    {data.daily_units.temperature_2m_max}
                </h2>
            </div>
        </div>
    );
}
