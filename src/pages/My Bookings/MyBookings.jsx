import { useContext, useEffect, useState } from "react";
import Navbar from "../../Navebar/Navebar";
import booking from "../../assets/booking.png"
import BookingCard from "./BookingCard";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Helmet from "../../Helmet/Helmet";

const MyBookings = () => {
    const metaTags = [
        { name: 'description', content: 'This is a description' },
        { property: 'og:title', content: 'Open Graph Title' }
    ];

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const  axiosSecure = useAxiosSecure();
    const url = `/bookings?email=${user.email}`

    useEffect(() => {
        // fetch(`https://ocean-side-hotel-server-side.vercel.app/bookings?email=${user.email}`,{credentials:"include"})
        //     .then(res => res.json())
        //     .then(data => setBookings(data))

        axiosSecure.get(url)
        .then(res => setBookings(res.data))
    }, [url,axiosSecure])

    return (
        <div>
            <Helmet title="My Bookings Page" meta={metaTags} />
            <div className="md:relative mt-[230px] md:mt-0">
                <div>
                    <img className="hidden md:block w-full" src={booking} alt="" />
                </div>
                <div className="absolute top-0 md:bg-gradient-to-r from-[#003465B8] via-[#00000000] to-[#76b9f8b8] w-full h-[352px] lg:h-[672px]">
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