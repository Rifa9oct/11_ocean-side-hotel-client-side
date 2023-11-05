import Navbar from "../../Navebar/Navebar";
import rooms from "../../assets/rooms.png"

const Rooms = () => {
    return (
        <div>
            <div className="md:relative">
                <div>
                    <img className="hidden md:block w-full" src={rooms} alt="" />
                </div>
                <div className="absolute top-0 md:bg-gradient-to-r from-[#003465B8] via-[#00000000] w-full h-[352px] lg:h-[678px]">
                    <Navbar></Navbar>
                </div>
            </div>
        </div>
    );
};

export default Rooms;