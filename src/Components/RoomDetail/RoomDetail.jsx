import { Link, useLoaderData } from "react-router-dom";
import { MdOutlineBedroomChild } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import Review from "./Review";
import Helmet from "../../Helmet/Helmet";

const RoomDetail = () => {
    const metaTags = [
        { name: 'description', content: 'This is a description' },
        { property: 'og:title', content: 'Open Graph Title' }
    ];

    const { user } = useContext(AuthContext);
    const lodeData = useLoaderData();

    const { _id, img, title, roomDetail, price, roomSize, description, availability } = lodeData;
    const [date, setDate] = useState([]);
    const [availableRooms, setAvailableRooms] = useState(availability);
    const [bookingConfirmed, setBookingConfirmed] = useState(false);

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
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const durationInMilliseconds = checkOutDate - checkInDate;
    const durationInDays = durationInMilliseconds / (1000 * 60 * 60 * 24);
    const totalPrice = price * durationInDays;

    const handleConfirm = () => {
        if (availableRooms > 0) {
            const { email } = user;
            const order = { img, email, price, totalPrice, checkInDate, checkOutDate, title, description };
            axios.post(`https://ocean-side-hotel-server-side.vercel.app/bookings`, order)
                .then(data => {
                    console.log(data);
                    if (data.data.insertedId) {
                        Swal.fire({
                            title: 'Good job!',
                            text: 'Booking added successfully.',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        });
                        setBookingConfirmed(true);
                    }
                    console.log(availability)
                    setAvailableRooms(availableRooms - 1);
                    const dec = availability - 1
                    const value = { dec };
                    console.log(value)

                    axios.patch(`https://ocean-side-hotel-server-side.vercel.app/rooms/${_id}`, value)
                        .then(res => console.log(res.data))
                })
        }
    }


    return (
        <div className="mb-32 max-w-[1200px] p-5 lg:p-0 mx-auto">
            <Helmet title="RoomDetail Page" meta={metaTags} />
            <img className="mx-auto mt-20" src={img} />
            <div>
                <h1 className="text-3xl font-bold mt-5">{title}</h1>
                <p className="max-w-[900px] mt-4 text-gray-500">{roomDetail}</p>
                <div className="flex gap-32 text-purple-600">
                    <p className="flex items-center gap-2 mt-2 font-bold"><MdOutlineBedroomChild className="text-2xl"></MdOutlineBedroomChild> {roomSize}</p>
                    <p className="flex items-center mt-2 font-bold"><FiDollarSign className="text-2xl"></FiDollarSign>{price} per night</p>
                </div>
                <p className="border-2 border-purple-600 text-purple-600 px-3 py-2 rounded-lg font-bold mt-5 w-[140px] ml-24">Availability {availableRooms}</p>
            </div>

            <div className="lg:w-[1200px] md:h-[320px] bg-purple-100 mx-auto mt-10 rounded-[42px]">
                <h1 className="text-center text-2xl font-bold pt-[36px]">Book Your Room</h1>
                <p className="text-gray-500 text-center text-sm">Discover the perfect space for you!</p>
                <div >
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row justify-around mt-10">
                            <div className="flex flex-col md:flex-row  md:gap-10 mx-auto md:mx-0">
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

                            {
                                user ? <>
                                    <button type="submit" className="rounded-lg bg-purple-400 md:px-5 py-2 text-white font-bold mt-5 md:mt-10 mx-24 md:mx-0 mb-5 md:mb-0 hover:bg-purple-600" disabled={availableRooms === 0}>{availableRooms === 0 ? "Unavailable" : "Book Now"}</button>
                                </> :
                                    <><Link to="/login"><button type="submit" className="rounded-lg bg-purple-400 md:px-5 py-2 text-white font-bold mt-5 md:mt-10 mx-24 md:mx-0 mb-5 md:mb-0 hover:bg-purple-600" disabled={availableRooms === 0}>{availableRooms === 0 ? "Unavailable" : "Book Now"}</button></Link></>
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
                                            <button onClick={handleConfirm} className="mr-[150px] md:mr-[180px] rounded-lg bg-purple-400 px-5 py-2 text-white font-semibold mt-10 hover:bg-purple-600">Confirm</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </form>
                    <div className="flex justify-center pb-5 md:mt-6">
                        {
                            bookingConfirmed ? <Link to={`/reviews/${_id}`}><button className="btn bg-purple-500 text-white hover:scale-105" disabled={!bookingConfirmed}>Add Reviews</button></Link> :

                                <button className="btn hover:scale-105" disabled={!bookingConfirmed}>Add Reviews</button>
                        }

                    </div>
                </div>
            </div>

            <div>
                <h1 className="mt-20 mb-10 text-4xl text-center font-extrabold text-purple-600">Customer Reviews</h1>
                <Review lodeData={lodeData}></Review>
            </div>
        </div>
    );
};

export default RoomDetail;