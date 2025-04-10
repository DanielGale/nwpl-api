import React from 'react';
import { IndicatorStatusRating } from "../entities/IndicatorStatusRating";

interface IndicatorRatingsProps {
    ratings: IndicatorStatusRating[];
}

const IndicatorRatingsList: React.FC<IndicatorRatingsProps> = ({ ratings }) => {
    return (
        <div className="space-y-4">
            {ratings && ratings.length > 0 ? (
                ratings.map((rating) => (
                    <div
                        key={rating.abbreviation}
                        className="p-4 bg-white border border-gray-300 rounded-lg hover:bg-green-50 transition"
                    >
                        <div className="font-semibold text-lg text-green-600">{rating.indicatorStatus}</div>
                        <div className="text-sm text-gray-500">{rating.abbreviation}</div>
                        {rating.definition?.short && (<div className="text-sm text-gray-400 mt-2">{rating.definition.short}</div>)}
                    </div>
                ))
            ) : (
                <p>No indicator ratings available.</p>
            )}
        </div>
    );
};

export default IndicatorRatingsList;