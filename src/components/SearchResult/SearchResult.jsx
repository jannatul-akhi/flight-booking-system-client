import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const SearchFlight = () => {
  const initialFlights = [
    {
      id: 1,
      origin: 'New York',
      destination: 'London',
      date: '2024-12-15',
      price: '$500',
    },
    {
      id: 2,
      origin: 'Los Angeles',
      destination: 'Tokyo',
      date: '2024-12-20',
      price: '$750',
    },
    {
      id: 3,
      origin: 'Paris',
      destination: 'Dubai',
      date: '2024-12-18',
      price: '$450',
    },
  ];

  const [flights, setFlights] = useState(initialFlights);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState({ origin: '', destination: '' });

  const handleSearch = () => {
    const results = initialFlights.filter(
      flight =>
        flight.origin.toLowerCase().includes(searchCriteria.origin.toLowerCase()) &&
        flight.destination.toLowerCase().includes(searchCriteria.destination.toLowerCase())
    );
    setFlights(results);
  };

  const resetSearch = () => {
    setFlights(initialFlights);
    setSearchCriteria({ origin: '', destination: '' });
  };

  return (
    <div className="px-6 py-16 bg-[#FBF8EF] min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg"  style={{ backgroundImage: "url('https://www.sheffield.com/wp-content/uploads/Untitled-design-56.jpg')" }}>
        <h1 className="text-3xl text-white font-bold mb-6 text-center">Search Flights </h1>
        <button
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="mb-6 bg-[#78B3CE] hover:bg-[#5b9fbe] text-white font-bold py-2 px-4 rounded"
        >
          {isSearchOpen ? 'Close Search' : 'Search Flights'} <FontAwesomeIcon icon={faSearch} className="text-white ps-3" />
        </button>

        {isSearchOpen && (
          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Origin"
                value={searchCriteria.origin}
                onChange={(e) => setSearchCriteria({ ...searchCriteria, origin: e.target.value })}
                className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Destination"
                value={searchCriteria.destination}
                onChange={(e) => setSearchCriteria({ ...searchCriteria, destination: e.target.value })}
                className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleSearch}
                className="bg-[#F96E2A] hover:bg-[#f85708] text-white font-bold py-2 px-4 rounded"
              >
                Search
              </button>
              <button
                onClick={resetSearch}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              >
                Reset
              </button>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border border-gray-300 px-4 py-2">Origin</th>
                <th className="border border-gray-300 px-4 py-2">Destination</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {flights.map((flight) => (
                <tr key={flight.id} className="text-center text-black font-semibold bg-gray-300">
                  <td className="border border-gray-300 px-4 py-2">{flight.origin}</td>
                  <td className="border border-gray-300 px-4 py-2">{flight.destination}</td>
                  <td className="border border-gray-300 px-4 py-2">{flight.date}</td>
                  <td className="border border-gray-300 px-4 py-2">{flight.price}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Link
                      to={`/details/${flight.id}`}
                      className="bg-[#78B3CE] hover:bg-[#5b9fbe] text-white font-bold py-2 px-4 rounded"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SearchFlight;
