'use client';

import { useWeatherData } from '@/hooks/useWeatherData';
import { findNearestValueToCurrentDate, getWeatherIcon, toReadableDate } from '@/helpers/utility';
import { useLocationData } from '@/hooks/useLocationData';
import { WeatherData } from '@/types/weatherData';
import { LocationData } from '@/types/locationData';

interface WeatherCardProps {
    initialData: { weather: WeatherData; location: LocationData };
}

export default function WeatherCard(props: WeatherCardProps) {
    const stuttgart = { lat: 48.7759, lng: 9.1829 };
    const { initialData } = props;

    const {
        data: weatherData,
        isLoading: isLoadingWeather,
        isError: isWeatherError,
    } = useWeatherData(stuttgart.lat, stuttgart.lng, initialData.weather);
    const {
        data: locationData,
        isLoading: isLoadingLocation,
        isError: isLocationError,
    } = useLocationData(stuttgart.lat, stuttgart.lng, initialData.location);

    if (isWeatherError || isLocationError) {
        console.log('Error...');
    }

    const values = findNearestValueToCurrentDate(weatherData?.hourly);

    return (
        <div className={'flex items-center justify-center h-screen'}>
            <div
                className='max-w-sm rounded-2xl
                [ p-2 md:p-4 lg:p-6 ]
                [ bg-gray-300 dark:bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 ]
                [ border-[1px] border-solid border-white border-opacity-30 ]
                [ shadow-black/70 shadow-2xl ]
                sm:w-full overflow-hidden'>
                {!isLoadingWeather && (
                    <>
                        <div className={'text-slate-600 dark:text-white'}>
                            <div className={'mb-3 text-xs'}>{values?.is_day ? 'Day' : 'Night'}</div>
                            <div className={'relative text-center'}>
                                <p className='font-light mt-2'>{toReadableDate(values?.time)}</p>
                                <div className={'animate-bounce-slow'}>{getWeatherIcon(values?.weathercode)}</div>
                                <div className={'absolute half-transparent top-1/4 -z-10'}>
                                    <div className='w-128 h-128 rounded-full bg-gradient-radial from-transparent via-transparent to-white dark:to-black'></div>
                                </div>
                                <h1 className='text-6xl font-bold mb-2' data-testid={'temp'}>
                                    {values?.temperature_2m ? Math.round(values.temperature_2m) : null}
                                    <span className={'text-4xl opacity-75 absolute'}>°</span>
                                </h1>
                                {isLoadingLocation ? (
                                    <div className='max-w-[150px] h-5 mx-auto bg-gray-100 rounded-full animate-pulse'></div>
                                ) : (
                                    <h2 className='text-xl font-bold'>{locationData?.address.city}</h2>
                                )}
                                <div className={'grid grid-cols-3 grid-flow-row gap-2 text-lg mt-6'}>
                                    <div className={'text-sm font-light'}>Wind now</div>
                                    <div className={'text-sm font-light'}>Humidity</div>
                                    <div className={'text-sm font-light'}>Precipitation</div>
                                    <div>
                                        <span className={'text-lg font-bold'}>{values?.windspeed_10m}</span>
                                        <span className={'text-xs'}>{weatherData?.hourly_units.windspeed_10m}</span>
                                    </div>
                                    <div>
                                        <span className={'text-lg font-bold'}>{values?.relativehumidity_2m}</span>
                                        <span className={'text-xs'}>
                                            {weatherData?.hourly_units.relativehumidity_2m}
                                        </span>
                                    </div>
                                    <div>
                                        <span className={'text-lg font-bold'}>{values?.precipitation}</span>
                                        <span className={'text-xs'}>{weatherData?.hourly_units.precipitation}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
