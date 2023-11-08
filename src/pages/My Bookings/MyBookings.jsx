import { useContext, useEffect, useState } from "react";
import Navbar from "../../Navebar/Navebar";
import booking from "../../assets/booking.png"
import BookingCard from "./BookingCard";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const  axiosSecure = useAxiosSecure();
    const url = `/bookings?email=${user.email}`

    useEffect(() => {
        // fetch(`http://localhost:5000/bookings?email=${user.email}`,{credentials:"include"})
        //     .then(res => res.json())
        //     .then(data => setBookings(data))

        axiosSecure.get(url)
        .then(res => setBookings(res.data))
    }, [url,axiosSecure])

    return (
        <div>
            <div className="md:relative">
                <div>
                    <img className="hidden md:block w-full" src={booking} alt="" />
                </div>
                <div className="absolute top-0 md:bg-gradient-to-r from-[#003465B8] via-[#00000000] to-orange-300 w-full h-[352px] lg:h-[672px]">
                    <Navbar></Navbar>
                </div>

                <div className="max-w-[1320px] mx-auto grid grid-col-1 grid-col-2 lg:grid-cols-3 gap-6 my-20">
                    {
                        bookings.map(booking => <BookingCard key={booking._id}
                            booking={booking}
                            bookings={bookings}
                            setBookings={setBookings}
                        ></BookingCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyBookings;