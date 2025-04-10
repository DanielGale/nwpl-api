export interface IndicatorStatusDefinition {
    short: string;
}

export interface IndicatorStatusRating {
    indicatorStatus: string;
    abbreviation: string;
    definition?: IndicatorStatusDefinition;
}
