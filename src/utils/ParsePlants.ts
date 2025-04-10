import nationalData from '../data/national_2020v1.json';
import wetlandRegions from '../data/wetland_regions.json';
//import indicatorRatings from '../data/indicator_status_ratings.json';

import { Plant } from '../entities/Plant';
import { PlantRegionStatus } from '../entities/Plant';

const regionAbbreviations = wetlandRegions.regions.map(r => r.abbreviation);
//const ratingAbbreviations = indicatorRatings.IndicatorStatusRatings.map(r => r.abbreviation);

export function parsePlants(): Plant[] {
    return (nationalData as any[]).map((entry) => {
        const scientificName = entry["Scientific Name"];
        const commonName = entry["Common Name"];

        const regions: PlantRegionStatus[] = regionAbbreviations
            .filter((abbr) => entry[abbr])
            .map((abbr) => ({
                regionAbbreviation: abbr,
                indicatorAbbreviation: entry[abbr],
            }));

        return {
            scientificName,
            commonName,
            regions,
        };
    });
}

