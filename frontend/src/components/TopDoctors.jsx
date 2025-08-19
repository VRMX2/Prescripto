// src/components/TopDoctors.jsx
import { useState } from "react";
import { doctors } from "../assets/assets";
import {useNavigate} from "react-router-dom";

const TopDoctors = () => {
  const [visible, setVisible] = useState(8); // Show 8 doctors initially

  const navigate = useNavigate();
  const handleLoadMore = () => {
    setVisible((prev) => prev + 4); // Load 4 more
  };

  const handleShowLess = () => {
    setVisible(8); // Reset back to 8
  };

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-black text-white">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
        Top <span className="text-blue-400">Doctors</span> to Book
      </h2>
      <p className="text-gray-400 mb-14 text-center max-w-2xl mx-auto">
        Explore highly rated and trusted doctors available for online and in-person consultations.
      </p>

      {/* Doctors Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {doctors.slice(0, visible).map((item, index) => (
			<div
			onClick = {() => navigate(`/appointment/${item._id}`)}
            key={index}
            className="bg-gray-900/70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover rounded-xl mb-4 grayscale"
            />
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-green-400 text-sm font-medium">Available</p>
              </div>
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-400">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-12">
        {visible < doctors.length && (
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
          >
            Load More
          </button>
        )}

        {visible > 8 && (
			<button
            onClick={handleShowLess}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default TopDoctors;
