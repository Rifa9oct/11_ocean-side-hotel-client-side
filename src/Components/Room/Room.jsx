import { TbHomeDollar } from "react-icons/tb";
import { MdOutlineRateReview } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Room = ({ room }) => {
    const { _id, img, title, price, review, description } = room;

    const navigate =useNavigate();
    const handleClick =  () => {
        navigate(`/roomDetail/${_id}`)             
    }
    return (
        <div className={"md:w-[626px] mx-auto"}>
            <img onClick={handleClick} src={img} />
            <h1 className="text-xl my-2 md:text-2xl font-bold mt-3">{title}</h1>
            <p className="text-gray-600">{description}</p>
            <div className="flex items-center gap-20">
                <p className="flex text-gray-600 items-center gap-2 text-lg font-medium"><TbHomeDollar />{price}</p>
                <p className="flex text-gray-600 items-center gap-2 text-lg font-medium"><MdOutlineRateReview/>{review} reviews</p>
            </div>
        </div>
    );
};

export default Room;