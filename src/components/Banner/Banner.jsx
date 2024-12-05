import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div 
          className="bg-cover bg-center h-screen w-full flex flex-col items-center justify-center text-white" 
          style={{ backgroundImage: "url('https://calaero.edu/wp-content/uploads/2023/08/iStock-1332501286-scaled.jpg')" }}
        >
          <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to GoAero</h1>
            <p className="text-lg md:text-xl mb-6">
              Discover the easiest way to search and book flights with GoAero. Whether you are traveling for business or leisure, our system offers a seamless and efficient experience.
            </p>
            <Link to="/search">
            <button
              className="bg-[#78B3CE] hover:bg-[#5a8ea5] text-white font-bold py-2 px-4 rounded"
            >
              Search Flight
            </button>
            </Link>
          </div>
        </div>
      );
};

export default Banner;
