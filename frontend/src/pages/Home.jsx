// src/pages/Home.jsx
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";

const Home = () => {
  return (
    <div className="pt-20">
      <Header />
      <SpecialityMenu />
      <TopDoctors />
    </div>
  );
};

export default Home;
