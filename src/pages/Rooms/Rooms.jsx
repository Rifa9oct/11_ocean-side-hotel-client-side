import { useEffect, useState } from "react";
import Navbar from "../../Navebar/Navebar";
import room from "../../assets/rooms.png"
import Room from "../../Components/Room/Room";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [sortByPrice, setSortByPrice] = useState(false);
    useEffect(() => {
        fetch("fakedata.json")
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])

    const sortedRooms = [...rooms].sort((a, b) => a.price - b.price);

    const toggleSort = () => {
        setSortByPrice(!sortByPrice);
    };

    const FilteredRooms = sortByPrice ? sortedRooms : rooms;

    return (
        <div>
            <div className="md:relative">
                <div>
                    <img className="hidden md:block w-full" src={room} alt="" />
                </div>
                <div className="absolute top-0 md:bg-gradient-to-r from-[#003465B8] via-[#00000000] w-full h-[352px] lg:h-[670px]">
                    <Navbar></Navbar>
                </div>
                <div className="my-20 px-5">
                    <h1 className="text-2xl md:text-4xl mt-56 md:mt-0 lg:text-6xl font-bold text-center">Find a Perfect Family Budget<br />Hotel Rooms</h1>

                    <div className="flex justify-center mt-3">
                        <button onClick={toggleSort} className="bg-orange-400 px-3 py-2 text-white font-bold hover:bg-orange-600">Sort By  Low Price</button>
                    </div>

                    <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                        {
                           FilteredRooms.map(room => <Room key={room.id} room={room}></Room>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rooms;