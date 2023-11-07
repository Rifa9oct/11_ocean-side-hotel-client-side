import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"
import img5 from "../../assets/img5.png"

const Imagery = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-20">
            <div className="relative w-[300px] h-[560px]">
                <img src={img1} />
                <h1 className="absolute bottom-[40px] left-[110px] text-white font-bold text-2xl">Rooms</h1>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative w-[300px] h-[260px]">
                    <img src={img2} />
                    <h1 className="absolute text-white font-bold text-2xl left-[110px] top-[190px]">Dining</h1>
                </div>
                <div className="relative w-[300px] h-[260px]">
                    <img src={img3} />
                    <h1 className="absolute text-white font-bold text-2xl left-[60px] top-[180px]">Conferences &<br /> <span className="left-10 absolute">Meetings</span></h1>
                </div>
                <div className="relative w-[300px] h-[260px]">
                    <img src={img4} />
                    <h1 className="absolute text-white font-bold text-2xl left-[45px] top-[190px]">Service & Facilities</h1>
                </div>
                <div className="relative w-[300px] h-[260px]">
                    <img src={img5} />
                    <h1 className="absolute text-white font-bold text-2xl left-[45px] top-[190px]">Service & Facilities</h1>
                </div>
            </div>
        </div>
    );
};

export default Imagery;