import Navbar from "../../Navebar/Navebar";
import bannar from "../../assets/bannar.png"
import "./home.css"

const Home = () => {
    return (
        <div className="md:relative">
            <div>
                <img className="hidden md:block w-full" src={bannar} alt="" />
            </div>
            <Navbar></Navbar>
            <h1 className="header hidden md:block md:absolute md:top-[220px] lg:top-[300px] md:left-[50px] lg:left-[320px] text-4xl lg:text-6xl font-bold">Discover Extraordinary<br />Comfort in Hotels</h1>
        </div>
    );
};

export default Home;