import Swal from "sweetalert2";
import moment from "moment/moment";
import { Link } from "react-router-dom";

const BookingCard = ({ booking, bookings, setBookings }) => {
    const { _id, img, title, checkInDate } = booking;

    const handleCancelBooking = _id => {
        const oneDayBeforeCheckIn = moment(checkInDate).subtract(1, "days");
        const currentDate = moment();
            if (currentDate.isSameOrBefore(oneDayBeforeCheckIn, "day")) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        fetch(`https://ocean-side-hotel-server-side.vercel.app/bookings/${_id}`, {
                            method: "DELETE"
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.deletedCount > 0) {
                                    Swal.fire(
                                        'Deleted!',
                                        'Your Booking has been deleted.',
                                        'success'
                                    )
                                    const remaining = bookings.filter(cof => cof._id !== _id);
                                    setBookings(remaining);
                                }
                            })
                    }
                });
            } else {
                Swal.fire('Cannot Cancel', 'You can only cancel the booking 1 day before check-In.', 'warning');
            }
        }

    return (
            <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto">
                <figure><img src={img} /></figure>
                <div className="card-body">
                    <h2 className="mt-12 text-white text-2xl font-bold text-center">{title}</h2>

                    <div className="card-actions justify-end">
                        <Link to={`/updatePage/${_id}`}><button className="btn btn-outline btn-warning">Update Booking</button></Link>
                        <button onClick={() => handleCancelBooking(_id, checkInDate)} className="btn btn-outline btn-warning">Cancel Booking</button>
                    </div>
                </div>
            </div>
        );
    };

    export default BookingCard;