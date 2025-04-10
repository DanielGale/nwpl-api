export interface NationalPlantRecord {
    "Scientific Name": string;
    "Common Name": string;
    [regionCode: string]: string; // dynamic region values like "CB", "HI" → "UPL", "FAC", etc.
}
