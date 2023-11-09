import { IoPersonCircle } from "react-icons/io5";

const ReviewCard = ({ review }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {
        (review?.photoUrl !== "") ?
          <img className="w-[200px] h-[200px] rounded-full" src={review.photoUrl} /> :
          <IoPersonCircle className=" w-[200px] h-[200px]  rounded-full text-5xl" />
      }
      <div>
        <h1 className="text-3xl my-3 text-center font-extrabold">{review?.name}</h1>
        <p className="text-sm text-gray-500">{review?.comment}</p>
        <div className="flex justify-center" >
          <div className="rating rating-sm mt-3 justify-center mx-auto gap-1">
            <input type="radio" name={`rating-${review.name}`} className="mask mask-heart bg-red-400" />
            <input type="radio" name={`rating-${review.name}`} className="mask mask-heart bg-orange-400" />
            <input type="radio" name={`rating-${review.name}`} className="mask mask-heart bg-yellow-400" />
            <input type="radio" name={`rating-${review.name}`} className="mask mask-heart bg-lime-400"/>
            <input type="radio" name={`rating-${review.name}`} className="mask mask-heart bg-green-400" checked />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;