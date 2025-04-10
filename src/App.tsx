import { parsePlants } from "./utils/ParsePlants";
import PlantCard from './components/PlantCard';
import './App.css';

function App() {
    const plants = parsePlants();
    const top10 = plants.slice(0,10);
    
    return (
        <>
            <div className="container mx-auto text-center py-8">
                <h1 className="text-4xl font-bold text-green-700">NWPL API</h1>
                <p className="text-lg text-gray-600">National Wetland Plant List</p>
            </div>

            <div className="container mx-auto px-4 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {top10.map((plant) => (
                        <PlantCard key={plant.scientificName} plant={plant} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default App
