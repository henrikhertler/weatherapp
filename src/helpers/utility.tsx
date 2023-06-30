import { SunnyIcon } from '@/assets/weatherIcons/sunnyIcon';
import { SunnyCloudIcon } from '@/assets/weatherIcons/sunnyCloudIcon';
import { SunnyCloudyIcon } from '@/assets/weatherIcons/sunnyCloudyIcon';
import { CloudyIcon } from '@/assets/weatherIcons/cloudyIcon';
import { RainSunnyIcon } from '@/assets/weatherIcons/rainSunnyIcon';
import { RainCloudyIcon } from '@/assets/weatherIcons/rainCloudyIcon';
import { CloudThunderIcon } from '@/assets/weatherIcons/cloudThunderIcon';
import { RainThunderIcon } from '@/assets/weatherIcons/rainThunderIcon';
import { Hourly } from '@/types/hourly';
import { HourlyValues } from '@/types/hourlyValues';

export const getWeatherIcon = (weatherCode: number | undefined) => {
    switch (weatherCode) {
        case 0: // Clear sky
            return <SunnyIcon />;

        case 1: // Mainly clear
            return <SunnyCloudIcon />;

        case 2: // Partly cloudy
            return <SunnyCloudyIcon />;

        case 3: // Overcast
            return <CloudyIcon />;

        case 51 || 53 || 55: // Drizzle: Light, moderate, and dense intensity
            return <RainSunnyIcon />;

        case 61 || 63 || 65: // Rain: Slight, moderate and heavy intensity
            return <RainCloudyIcon />;

        case 80 || 81 || 82: // Rain showers: Slight, moderate, and violent
            return <RainCloudyIcon />;

        case 95: // Thunderstorm: Slight or moderate
            return <CloudThunderIcon />;

        case 96 || 99: // Thunderstorm with slight and heavy hail
            return <RainThunderIcon />;

        default: // Hopefully it's sunny for you!
            return <SunnyIcon />;
    }
};

export const toReadableDate = (date: string | undefined): string | null => {
    if (!date) {
        return null;
    }
    return new Date(date).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });
};

export const findNearestValueToCurrentDate = (data: Hourly | undefined): HourlyValues | null => {
    if (!data) {
        return null;
    }

    const currentTime = new Date();

    // Convert the time strings to Date objects
    const timeObjects = data.time.map((timeStr) => new Date(timeStr));

    // Find the index of the nearest time
    const nearestIndex = timeObjects.reduce((closestIndex, timeObj, currentIndex) => {
        const closestTime = timeObjects[closestIndex];
        const currentDiff = Math.abs(currentTime.getTime() - timeObj.getTime());
        const closestDiff = Math.abs(currentTime.getTime() - closestTime.getTime());
        return currentDiff < closestDiff ? currentIndex : closestIndex;
    }, 0);

    // Return the corresponding value [nearestIndex]
    return {
        time: data.time[nearestIndex],
        temperature_2m: data.temperature_2m[nearestIndex],
        relativehumidity_2m: data.relativehumidity_2m[nearestIndex],
        precipitation: data.precipitation[nearestIndex],
        weathercode: data.weathercode[nearestIndex],
        windspeed_10m: data.windspeed_10m[nearestIndex],
        is_day: data.is_day[nearestIndex],
    };
};
