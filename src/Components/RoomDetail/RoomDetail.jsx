import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineBedroomChild } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import { useState } from "react";

const RoomDetail = () => {
    const lodeData = useLoaderData();
    
    const { id } = useParams();
    console.log(id)
    const data = lodeData.find(data => data._id === id);
    const { img, title, roomDetail, price, roomSize, description,availability } = data;

    const [date, setDate] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        const checkIn = e.target.checkIn.value;
        const checkOut = e.target.checkOut.value;
        const date = { checkIn, checkOut };
        setDate(date)
    }
    const { checkIn, checkOut } = date;
    const [availableRooms, setAvailableRooms] = useState(availability);

    // Calculate the duration and total price
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const durationInMilliseconds = checkOutDate - checkInDate;
    const durationInDays = durationInMilliseconds / (1000 * 60 * 60 * 24);
    const totalPrice = price * durationInDays;

    const handleConfirm = () => {
        if (availableRooms > 0) {
            setAvailableRooms(availableRooms - 1);
        }
    }
    console.log(availableRooms)
    return (
        <div className="mb-32">
            <img className="mx-auto mt-20" src={img} />
            <div className="max-w-[1320px] mx-auto">
                <h1 className="text-3xl font-bold mt-5">{title}</h1>
                <p className="max-w-[900px] mt-4 text-gray-500">{roomDetail}</p>
                <div className="flex gap-32 text-purple-600">
                    <p className="flex items-center gap-2 mt-2 font-bold"><MdOutlineBedroomChild className="text-2xl"></MdOutlineBedroomChild> {roomSize}</p>
                    <p className="flex items-center mt-2 font-bold"><FiDollarSign className="text-2xl"></FiDollarSign>{price} per night</p>
                </div>
            </div>

            <div className="w-[1194px] h-[320px] bg-purple-100 mx-auto mt-10 rounded-[42px]">
                <h1 className="text-center text-2xl font-bold pt-[36px]">Book Your Room</h1>
                <p className="text-gray-500 text-center text-sm">Discover the perfect space for you!</p>
                <div >
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-around mt-10">
                            <div className="flex gap-10">
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Check-In Date</span>
                                    </label>
                                    <input type="date" name="checkIn" className="input input-bordered input-secondary w-[200px]" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Check-Out Date</span>
                                    </label>
                                    <input type="date" name="checkOut" className="input input-bordered input-secondary w-[200px]" />
                                </div>
                            </div>
                            <button type="submit" className="rounded-lg bg-purple-400 px-5 py-2 text-white font-bold mt-10
                     hover:bg-purple-600" onClick={() => document.getElementById('my_modal_5').showModal()} disabled={availableRooms === 0}>{availableRooms === 0 ? "Unavailable":"Book Now"}</button>

                            {/* modal */}
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h1 className="text-center text-2xl font-bold text-purple-600">{title}</h1>
                                    <p className="text-gray-600 text-center text-sm">{description}</p>
                                    <div className="flex justify-center  w-full mt-4">
                                        <div>
                                            <p className="font-semibold text-base">Duration : <span className="text-gray-500">{durationInDays} days</span></p>
                                            <p className="font-semibold text-base">Total price : <span className="text-gray-500">$ {totalPrice}</span></p>
                                            <h3 className="font-semibold text-base">Check-In Date : <span className="text-gray-500">{checkIn}</span></h3>
                                            <h3 className="font-semibold text-base">Check-Out Date : <span className="text-gray-500">{checkOut}</span></h3>
                                        </div>
                                    </div>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button onClick={handleConfirm} className="mr-[180px] rounded-lg bg-purple-400 px-5 py-2 text-white font-semibold mt-10 hover:bg-purple-600">Confirm</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RoomDetail;