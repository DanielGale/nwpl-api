export interface PlantRegionStatus {
    regionAbbreviation: string; // like "CB", "HI"
    indicatorAbbreviation: string; // like "FAC", "UPL"
}

export interface Plant {
    scientificName: string;
    commonName: string;
    regions: PlantRegionStatus[];
}
