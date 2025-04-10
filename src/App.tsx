import { parsePlants } from "./utils/ParsePlants";
import { parseIndicators } from "./utils/ParseIndicatorStatusRatings";
import PlantCard from './components/PlantCard';
import IndicatorRatingsList from "./components/IndicatorRatingsList";
import './App.css';

function App() {
    const plants = parsePlants();
    const ratings = parseIndicators();
    //const top10 = plants.slice(0,10);
    const rand6 = [...plants].sort(() => 0.5 - Math.random()).slice(0, 6);
    
    return (
        <div className="flex flex-col h-screen">
            {/* Top Row */}
            <div className="bg-green-700 text-white text-center py-4">
                <h1 className="text-3xl font-bold">NWPL API</h1>
                <p>National Wetland Plant List 2020-v1</p>
            </div>

            {/* Main Content - Flex Layout */}
            <div className="flex flex-grow overflow-hidden">
                {/* Left Sidebar - Indicator Ratings List */}
                <div className="w-1/4 p-6 bg-gray-100 overflow-auto">
                    {ratings && ratings.length > 0 ? (
                        <IndicatorRatingsList ratings={ratings} />
                    ) : (
                        <p>Loading indicator ratings...</p>
                    )}
                </div>

                {/* Right Side - Plant Cards */}
                <div className="flex-1 p-6 overflow-auto">
                    <div className="container mx-auto px-4 pb-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {rand6.length > 0 ? (
                                rand6.map((plant) => (
                                    <PlantCard key={plant.scientificName} plant={plant} />
                                ))
                            ) : (
                                <p>No plants available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App
