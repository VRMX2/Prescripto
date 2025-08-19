// src/components/SpecialityMenu.jsx
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <section
      id="speciality"
      className="px-6 md:px-12 lg:px-20 py-20 text-center bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Find by <span className="text-blue-400">Speciality</span>
      </h2>
      <p className="text-gray-400 mb-14 max-w-2xl mx-auto">
        Choose from a variety of medical fields and connect with trusted doctors instantly.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col items-center gap-4 p-8 bg-gray-900/70 backdrop-blur-md rounded-2xl hover:bg-gray-800/90 hover:scale-105 transition-all shadow-xl"
          >
            <img src={item.image} alt={item.speciality} className="w-20 grayscale opacity-90" />
            <p className="text-lg font-semibold">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SpecialityMenu;
