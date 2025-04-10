import indicatorRatings from '../data/indicator_status_ratings.json';
import {IndicatorStatusRating} from '../entities/IndicatorStatusRating';

export function parseIndicators(): IndicatorStatusRating[] {
    return indicatorRatings.IndicatorStatusRatings.map((entry) => {
        const { indicatorStatus, abbreviation, definition } = entry;

        return {
            indicatorStatus,
            abbreviation,
            definition: {
                short: definition.short || 'No description available.',
            },
        };
    });
}
