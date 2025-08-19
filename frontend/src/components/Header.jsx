import { assets } from "../assets/assets";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row bg-gradient-to-r from-black via-gray-900 to-black rounded-2xl px-6 md:px-12 lg:px-20 min-h-[80vh] mt-20 shadow-xl overflow-hidden">
      {/* Left Text Section */}
      <div className="md:w-1/2 flex flex-col justify-center gap-8 py-12">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-extrabold leading-tight">
          Book Appointment <br /> With{" "}
          <span className="text-blue-400">Trusted Doctors</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-4 text-gray-300 text-lg font-light">
          <img
            className="w-32 grayscale opacity-80"
            src={assets.group_profiles}
            alt="Profiles"
          />
          <p className="max-w-md">
            Simply browse through our extensive list of trusted doctors, and
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 px-10 py-4 rounded-full text-white text-lg font-medium shadow-lg hover:scale-105 transition-transform w-max"
          href="#speciality"
        >
          Book Appointment
          <img className="w-5 invert" src={assets.arrow_icon} alt="Arrow" />
        </a>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0 relative">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <img
			className = "w-full max-w-lg rounded-2xl object-cover shadow-2xl grayscale"
          src={assets.header_img}
          alt="Header"
        />
      </div>
    </header>
  );
};

export default Header;
