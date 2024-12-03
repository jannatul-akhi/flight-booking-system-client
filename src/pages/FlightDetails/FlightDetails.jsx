// FlightDetails.jsx
import { useState } from "react";
import PropTypes from "prop-types";

const FlightDetails = () => {
  // Sample flight data
  const flights = [
    {
      airline: "Airline A",
      duration: "4h 10m",
      price: "250.00",
      availableSeats: 20,
    },
    {
      airline: "Airline B",
      duration: "5h 30m",
      price: "300.00",
      availableSeats: 15,
    },
    {
      airline: "Airline C",
      duration: "6h 0m",
      price: "350.00",
      availableSeats: 10,
    },
  ];

  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
  };

  // Flight Card Component
  const FlightCard = ({ flight, onSelectFlight }) => {
    return (
      <div
        className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow"
        onClick={() => onSelectFlight(flight)}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {flight.airline}
        </h3>
        <p className="text-gray-600">Duration: {flight.duration}</p>
        <p className="text-gray-600">Price: ${flight.price}</p>
        <p className="text-gray-600">
          Available Seats: {flight.availableSeats}
        </p>
      </div>
    );
  };

  // Prop Types for FlightCard
  FlightCard.propTypes = {
    flight: PropTypes.shape({
      airline: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      availableSeats: PropTypes.number.isRequired,
    }).isRequired,
    onSelectFlight: PropTypes.func.isRequired,
  };

  // Flight Detail Component
  const FlightDetail = ({ flight }) => {
    if (!flight) {
      return <div className="text-center text-red-500">No flight selected</div>;
    }

    return (
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Flight Details
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-lg font-semibold text-gray-700">
              Airline:
            </span>
            <span className="text-lg text-gray-600">{flight.airline}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-lg font-semibold text-gray-700">
              Duration:
            </span>
            <span className="text-lg text-gray-600">{flight.duration}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-lg font-semibold text-gray-700">Price:</span>
            <span className="text-lg font-bold text-blue-600">
              ${flight.price}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-lg font-semibold text-gray-700">
              Available Seats:
            </span>
            <span className="text-lg text-gray-600">
              {flight.availableSeats}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Book Now
          </button>
        </div>
      </div>
    );
  };

  // Prop Types for FlightDetail
  FlightDetail.propTypes = {
    flight: PropTypes.shape({
      airline: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      availableSeats: PropTypes.number.isRequired,
    }),
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center pt-10" >
          Available Flights
        </h1>

      <div className="w-4/5 mx-auto flex flex-col justify-center items-center p-4 rounded-lg bg-no-repeat pt-20 pb-20" style={{ backgroundImage: "url('https://th-thumbnailer.cdn-si-edu.com/CuUyANzT64sjHiOQUixgbXvt1qk=/fit-in/1072x0/filters:focal(960x640:961x641)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/a1/f3/a1f32a7a-1da5-4088-afc7-f2c0dda22aa3/plane-7013022_1920.jpg')" }}>
        
        {/* Flight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {flights.map((flight, index) => (
            <FlightCard
              key={index}
              flight={flight}
              onSelectFlight={handleSelectFlight}
            />
          ))}
        </div>

        {/* Selected Flight Details */}
        <FlightDetail flight={selectedFlight} />
      </div>
    </div>
  );
};

export default FlightDetails;
