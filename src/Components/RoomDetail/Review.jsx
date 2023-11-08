import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Review = ({ lodeData }) => {

     const [reviews, setReviews] = useState([]);

     useEffect(() => {
         fetch("https://ocean-side-hotel-server-side.vercel.app/reviews")
             .then(res => res.json())
             .then(data => setReviews(data))
     }, [])

    const reviewRooms = reviews?.filter(item => item.room === lodeData?.title);
    if(reviewRooms.length === 0){
        return <p className="text-xl font-bold text-center">There are no customer review yet !</p>
    }
    
    return (
        <div className="max-w-[1320px] grid grid-cols-1 mx-auto lg:grid-cols-3 gap-8 items-center justify-center mb-20">
            {
                 reviewRooms?.map(review => <ReviewCard key={review._id} review={review}></ReviewCard> )
            }
        </div>
    );
};

export default Review;