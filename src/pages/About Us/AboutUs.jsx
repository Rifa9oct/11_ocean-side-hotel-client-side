import Navbar from "../../Navebar/Navebar";
import aboutus from "../../assets/aboutus.png"

const AboutUs = () => {
    return (
        <div>
            <div className="md:relative">
                <div>
                    <img className="hidden md:block w-full" src={aboutus} alt="" />
                </div>
                <div className="absolute top-0 md:bg-gradient-to-r from-[#003465B8] via-[#00000000] to-orange-300 w-full h-[352px] lg:h-[678px]">
                    <Navbar></Navbar>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;