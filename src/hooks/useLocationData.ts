import { useQuery } from '@tanstack/react-query';
import { LocationData } from '@/types/locationData';

export const fetchLocationData = async (latitude: number, longitude: number): Promise<LocationData> => {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
    );
    if (!response.ok) {
        throw new Error('Failed to fetch location data');
    }
    return await response.json();
};

export function useLocationData(latitude: number, longitude: number, initialData?: LocationData) {
    return useQuery({
        queryKey: ['cityData', latitude, longitude],
        queryFn: () => fetchLocationData(latitude, longitude),
        initialData,
    });
}
