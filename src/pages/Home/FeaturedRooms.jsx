import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { FaBed } from "react-icons/fa";
import { HiWifi } from "react-icons/hi";
import { MdOutlineFoodBank } from "react-icons/md";

const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/rooms")
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])

    const superSuite = rooms.find(room => room.title === "Super Suite");
    const deluxeSuite = rooms.find(room => room.title === "Deluxe Suite");



    return (
        <div className="max-w-[1320px] mx-auto my-20 p-5 lg:p-0">
            <h1 className="text-black text-center lg:text-left text-4xl font-extrabold mb-10">Our Featured Rooms</h1>
            <div className="flex flex-col lg:flex-row justify-between items-center">
                {/* Super Suite */}
                <div>
                    <div className={"md:w-[626px] mx-auto"}>
                        <img src={superSuite?.img} />
                        <h1 className="text-xl my-2 md:text-2xl font-bold mt-3">{superSuite?.title}</h1>
                        <p className="text-gray-600">{superSuite?.description}</p>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <p><FaBed className="inline text-lg" /> King size bed</p>
                            <p><HiWifi className="inline text-lg" /> Free wifi</p>
                            <p><TbAirConditioning className="inline text-lg" /> Air conditioner</p>
                            <p><MdOutlineFoodBank className="inline text-xl mb-1" /> Free breakfast</p>
                        </div>
                        <Link to={`/roomDetail/${superSuite?._id}`}><p className="mt-4 mb-10 lg:mb-10 text-blue-500 hover:text-[#2200ff] font-semibold">Book Now <FaArrowRightLong className="inline text-lg" /></p></Link>
                    </div>
                </div>

                {/* Deluxe Suite*/}
                <div>
                    <div className={"md:w-[626px] mx-auto"}>
                        <img src={deluxeSuite?.img} />
                        <h1 className="text-xl my-2 md:text-2xl font-bold mt-3">{deluxeSuite?.title}</h1>
                        <p className="text-gray-600">{deluxeSuite?.description}</p>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <p><FaBed className="inline text-lg" /> King size bed</p>
                            <p><HiWifi className="inline text-lg" /> Free wifi</p>
                            <p><TbAirConditioning className="inline text-lg" /> Air conditioner</p>
                            <p><MdOutlineFoodBank className="inline text-xl mb-1" /> Free breakfast</p>
                        </div>
                        <Link to={`/roomDetail/${deluxeSuite?._id}`}><p className="mt-4 mb-10 lg:mb-10 text-blue-500 hover:text-[#2200ff] font-semibold">Book Now <FaArrowRightLong className="inline text-lg" /></p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedRooms;