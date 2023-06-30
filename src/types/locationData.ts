export interface LocationData {
    place_id: number;
    licence: string;
    osm_type: string;
    osm_id: number;
    lat: string;
    lon: string;
    place_rank: number;
    category: string;
    type: string;
    importance: number;
    addresstype: string;
    name: string;
    display_name: string;
    address: {
        junction: string;
        road: string;
        neighbourhood: string;
        suburb: string;
        city: string;
        state: string;
        ISO3166_2_lvl4: string;
        postcode: string;
        country: string;
        country_code: string;
    };
    boundingbox: [string, string, string, string];
}
