import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Helmet from "../../Helmet/Helmet";

const UpdatePage = () => {
    const metaTags = [
        { name: 'description', content: 'This is a description' },
        { property: 'og:title', content: 'Open Graph Title' }
    ];

    const lodeData = useLoaderData();

    const { _id, title, description, price, checkInDate, checkOutDate } = lodeData;
    const [date, setDate] = useState([]);

    const defaultCheckIn = checkInDate ? new Date(checkInDate).toISOString().substring(0, 10) : "";
    const defaultCheckOut = checkOutDate ? new Date(checkOutDate).toISOString().substring(0, 10) : "";

    const handleSubmit = e => {
        e.preventDefault();
        const checkIn = e.target.checkIn.value;
        const checkOut = e.target.checkOut.value;
        const date = { checkIn, checkOut };
        const currentDate = new Date();
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

        if (isNaN(checkInDate) ||
        isNaN(checkOutDate) ||
        checkInDate < currentDate ||
        checkInDate >= checkOutDate) {
        Swal.fire({
            title: 'Sorry!',
            text: 'Select a valid Date.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
    else {
        setDate(date);
        document.getElementById("my_modal_5").showModal();
    }
    }
    const { checkIn, checkOut } = date;

    // Calculate the duration and total price
    const checkIndate = new Date(checkIn);
    const checkOutdate = new Date(checkOut);
    const durationInMilliseconds = checkOutdate - checkIndate;
    const durationInDays = durationInMilliseconds / (1000 * 60 * 60 * 24);
    const totalPrice = price * durationInDays;

    const updatebooking = { checkIndate, checkOutdate, totalPrice }

    const handleConfirm = () => {
        axios.patch(`https://ocean-side-hotel-server-side.vercel.app/bookings/${_id}`, updatebooking)
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
        <div className="flex justify-center items-center h-[650px] p-5 lg:p-0">
            <Helmet title="Update Page" meta={metaTags} />
            <div className="w-[900px] md:h-[320px] bg-purple-100 rounded-[42px]">
                <h1 className="text-center text-2xl font-bold pt-[36px]">Update Your Booking</h1>
                <div >
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row justify-around mt-10">
                            <div className="flex flex-col md:flex-row md:gap-10 mx-auto md:mx-0">
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

                            <button type="submit" className="rounded-lg bg-purple-400 md:px-5 py-2 text-white font-bold mt-5 md:mt-10 mx-24 md:mx-0 mb-5 md:mb-0 hover:bg-purple-600">Update Booking</button>

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
