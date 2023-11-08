import { IoPersonCircle } from "react-icons/io5";

const ReviewCard = ({ review }) => {
    return (
        <div className="flex flex-col items-center justify-center">
          {
            (review?.photoUrl !== "")?
              <img className="w-[200px] h-[200px] rounded-full" src={review.photoUrl}/> :
              <IoPersonCircle className=" w-[200px] h-[200px]  rounded-full text-5xl"/>
          }
            <div>
                <h1 className="text-3xl my-3 text-center font-extrabold">{review?.name}</h1>
                <p className="text-sm text-gray-500">{review?.comment}</p>
            </div>
        </div>
    );
};

export default ReviewCard;