import { LocationData } from '@/types/locationData';

export const locationDataMock: LocationData = {
    place_id: 308202355,
    licence: 'Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright',
    osm_type: 'relation',
    osm_id: 2022261,
    lat: '48.77561285',
    lon: '9.182909526852992',
    place_rank: 30,
    category: 'junction',
    type: 'yes',
    importance: 0.00000999999999995449,
    addresstype: 'junction',
    name: 'Charlottenplatz',
    display_name:
        'Charlottenplatz, Richard-von-Weizsäcker-Planie, Rathaus, Stuttgart-Mitte, Stuttgart, Baden-Württemberg, 70173, Germany',
    address: {
        junction: 'Charlottenplatz',
        road: 'Richard-von-Weizsäcker-Planie',
        neighbourhood: 'Rathaus',
        suburb: 'Stuttgart-Mitte',
        city: 'Stuttgart',
        state: 'Baden-Württemberg',
        ISO3166_2_lvl4: 'DE-BW',
        postcode: '70173',
        country: 'Germany',
        country_code: 'de',
    },
    boundingbox: ['48.774276', '48.7769335', '9.181221', '9.183797'],
};
