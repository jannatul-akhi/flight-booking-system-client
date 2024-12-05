// FlightBooking.jsx
import { useState } from 'react';

const FlightBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    flight: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const flights = [
    { id: 1, airline: 'Airline A', price: 250 },
    { id: 2, airline: 'Airline B', price: 300 },
    { id: 3, airline: 'Airline C', price: 350 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Flight Booking</h1>

      {isSubmitted ? (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Booking Confirmed!</h2>
          <p className="text-gray-700">Thank you for booking with us, {formData.name}!</p>
          <p className="text-gray-700">
            You have booked a flight with <strong>{formData.flight}</strong>.
          </p>
          <p className="text-gray-700 mt-4">A confirmation email has been sent to {formData.email}.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Book Another Flight
          </button>
        </div>
      ) : (
        <form
          className=" bg-white p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="flight">
              Select Flight
            </label>
            <select
              id="flight"
              name="flight"
              value={formData.flight}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            >
              <option value="">Choose a flight</option>
              {flights.map((flight) => (
                <option key={flight.id} value={flight.airline}>
                  {flight.airline} - ${flight.price}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Confirm Booking
          </button>
        </form>
      )}
    </div>
  );
};

export default FlightBooking;
