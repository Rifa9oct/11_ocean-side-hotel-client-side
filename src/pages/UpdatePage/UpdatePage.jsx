import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const UpdatePage = () => {
    const { user } = useContext(AuthContext);
    const lodeData = useLoaderData();

    const { _id,title, description, price, availability, checkInDate, checkOutDate } = lodeData;
    const [date, setDate] = useState([]);

    const [availableRooms, setAvailableRooms] = useState(availability);

    const defaultCheckIn = checkInDate ? new Date(checkInDate).toISOString().substring(0, 10) : "";
    const defaultCheckOut = checkOutDate ? new Date(checkOutDate).toISOString().substring(0, 10) : "";

    const handleSubmit = e => {
        e.preventDefault();
        const checkIn = e.target.checkIn.value;
        const checkOut = e.target.checkOut.value;
        const date = { checkIn, checkOut };
        setDate(date)
    }
    const { checkIn, checkOut } = date;

    // Calculate the duration and total price
    const checkIndate = new Date(checkIn);
    const checkOutdate = new Date(checkOut);
    const durationInMilliseconds = checkOutdate - checkIndate;
    const durationInDays = durationInMilliseconds / (1000 * 60 * 60 * 24);
    const totalPrice = price * durationInDays;

    const updatebooking = {checkIndate,checkOutdate,totalPrice}

    const handleConfirm = () => {
        axios.patch(`http://localhost:5000/bookings/${_id}`,updatebooking)
        .then(data => {
            console.log(data.data);
            if (data.data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Good job!',
                    text: 'Booking  updated successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            }
        })
    }

    return (
        <div className="flex justify-center items-center h-[650px]">
            <div className="w-[900px] h-[320px] bg-purple-100 rounded-[42px]">
                <h1 className="text-center text-2xl font-bold pt-[36px]">Update Your Booking</h1>
                <div >
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-around mt-10">
                            <div className="flex gap-10">
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Check-In Date</span>
                                    </label>
                                    <input type="date" name="checkIn" defaultValue={defaultCheckIn ? defaultCheckIn : checkIn} className="input input-bordered input-secondary w-[200px]" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Check-Out Date</span>
                                    </label>
                                    <input type="date" defaultValue={defaultCheckOut ? defaultCheckOut : checkOut} name="checkOut" className="input input-bordered input-secondary w-[200px]" />
                                </div>
                            </div>

                            {
                                user ? <>
                                    <button type="submit" className="rounded-lg bg-purple-400 px-5 py-2 text-white font-bold mt-10 hover:bg-purple-600" onClick={() => document.getElementById('my_modal_5').showModal()} disabled={availableRooms === 0}>{availableRooms === 0 ? "Unavailable" : "Update Booking"}</button>
                                </> :
                                    <><Link to="/login"><button type="submit" className="rounded-lg bg-purple-400 px-5 py-2 text-white font-bold mt-10
                                hover:bg-purple-600" onClick={() => document.getElementById('my_modal_5').showModal()} disabled={availableRooms === 0}>{availableRooms === 0 ? "Unavailable" : "Update Booking"}</button></Link></>
                            }

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

export default UpdatePage;