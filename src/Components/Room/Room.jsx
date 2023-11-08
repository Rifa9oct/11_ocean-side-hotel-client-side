import { TbHomeDollar } from "react-icons/tb";
import { MdOutlineRateReview } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReviewCard from "../RoomDetail/Review";

const Room = ({ room }) => {
    const { _id, img, title, price, description } = room;
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://ocean-side-hotel-server-side.vercel.app/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    // console.log(reviews);

    const familySuite = reviews?.filter(item => item.room === "Family Suite");
    const doubleRoom = reviews?.filter(item => item.room === "Double Room");
    const singleRoom = reviews?.filter(item => item.room === "Single Room");
    const deluxeSuite = reviews?.filter(item => item.room === "Deluxe Suite");
    const superSuite = reviews?.filter(item => item.room === "Super Suite");
    const honeymoonSuite = reviews?.filter(item => item.room === "Honeymoon Suite");

    return (
        <div className={"md:w-[626px] mx-auto"}>
            <Link to={`/roomDetail/${_id}`}><img src={img} /></Link>
            <h1 className="text-xl my-2 md:text-2xl font-bold mt-3">{title}</h1>
            <p className="text-gray-600">{description}</p>
            <div className="flex items-center gap-20">
                <p className="flex text-gray-600 items-center gap-2 text-lg font-medium"><TbHomeDollar />{price}</p>
                <p className="flex text-gray-600 items-center gap-2 text-lg font-medium"><MdOutlineRateReview />
                    {
                        title === "Family Suite" ? familySuite.length : "" ||
                            title === "Double Room" ? doubleRoom.length : "" ||
                                title === "Single Room" ? singleRoom.length : "" ||
                                    title === "Deluxe Suite" ? deluxeSuite.length : "" ||
                                        title === "Super Suite" ? superSuite.length : "" ||
                                            title === "Honeymoon Suite" ? honeymoonSuite.length : ""
                    }
                    reviews</p>
            </div>
        </div>
    );
};

export default Room;