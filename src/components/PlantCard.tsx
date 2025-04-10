import React from 'react';
import { Plant } from '../entities/Plant';

interface PlantCardProps {
    plant: Plant;
    thumbnailUrl?: string; // Optional image
}

const PlantCard: React.FC<PlantCardProps> = ({ plant, thumbnailUrl }) => {
    return (
        <div className="flex max-w-2xl bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg">
            {thumbnailUrl && (
                <div className="w-1/3">
                    <img
                        src={thumbnailUrl}
                        alt={`${plant.commonName} thumbnail`}
                        className="h-full w-full object-cover"
                    />
                </div>
            )}
            <div className={`p-6 ${thumbnailUrl ? 'w-2/3' : 'w-full'}`}>
                <h2 className="text-2xl font-bold mb-2">{plant.commonName}</h2>
                <p className="italic text-gray-300 mb-4">{plant.scientificName}</p>
                <h3 className="font-semibold mb-1 text-gray-200">Region Ratings:</h3>
                <ul className="text-sm text-gray-400 list-disc list-inside">
                    {plant.regions.map((region, index) => (
                        <li key={index}>
                            <strong>{region.regionAbbreviation}</strong>: {region.indicatorAbbreviation}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PlantCard;
