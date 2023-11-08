

const SpecialOffers = () => {
    return (
        <div className="mx-auto max-w-[1200px]  overflow-x-hidden" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
            <h2 className="header mt-40 text-center lg:text-left text-lg font-semibold">Special Offers</h2>
            <h1 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl text-black font-extrabold my-3">Best offer of the month</h1>
            <p className="text-center lg:text-left text-gray-500">Experience Fantastic Benefits and Obtain Better Rates When You<br />Make a Direct Booking on Our Official Website</p>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 justify-between">
                {/* card-1 */}
                <div className="mx-auto lg:mx-0 w-[280px] h-[360px] bg-blue-100 rounded-[28px] ">
                    <img className="w-[250px] h-[180px] mx-auto pt-[13px]" src="https://i.ibb.co/s2STVs9/img3.png" />

                    <p className="text-xs font-bold px-5 pt-5 text-[#5E5E5E]">room</p>
                    <div className="flex items-center justify-between px-5">
                        <h1 className="text-xl font-extrabold text-black">Honeymoon </h1>
                        <div className="flex gap-1">
                            <img className=" w-[16px] h-[20px]" src="https://i.ibb.co/prBBGZq/Vector.png" />
                            <p className="font-extrabold text-lg">2</p>
                        </div>
                    </div>
                    <p className="text-xs font-bold px-5 pt-2 text-[#5E5E5E]">Indulge in a Memorable One-Time Romantic Dinner for Two.</p>
                    <p className="font-extrabold text-3xl text-center pt-3">$ 699 <span className="text-[#5E5E5E] text-sm">/night</span></p>
                </div>

                {/* card-2 */}
                <div className=" mx-auto w-[280px] h-[360px] bg-blue-100 rounded-[28px] ">
                    <img className="w-[250px] h-[180px] mx-auto pt-[13px]" src="https://i.ibb.co/J2fzdMM/img2.png" />

                    <p className="text-xs font-bold px-5 pt-5 text-[#5E5E5E]">room</p>
                    <div className="flex items-center justify-between px-5">
                        <h1 className="text-xl font-extrabold text-black">Meetings</h1>
                        <div className="flex gap-1">
                            <img className=" w-[16px] h-[20px]" src="https://i.ibb.co/prBBGZq/Vector.png" />
                            <p className="font-extrabold text-lg">30</p>
                        </div>
                    </div>
                    <p className="text-xs font-bold px-5 pt-2 text-[#5E5E5E]">Experience an Exclusively Private Environment to Boost Your Productivity.</p>
                    <p className="font-extrabold text-3xl text-center pt-3">$ 999 <span className="text-[#5E5E5E] text-sm">/night</span></p>
                </div>

                {/* card-3 */}
                <div className=" mx-auto w-[280px] h-[360px] bg-blue-100 rounded-[28px] ">
                    <img className="w-[250px] h-[180px] mx-auto pt-[13px]" src="https://i.ibb.co/TcqKTvg/img1.png" />

                    <p className="text-xs font-bold px-5 pt-5 text-[#5E5E5E]">room</p>
                    <div className="flex items-center justify-between px-5">
                        <h1 className="text-xl font-extrabold text-black">Romantic Dining</h1>
                        <div className="flex gap-1">
                            <img className=" w-[16px] h-[20px]" src="https://i.ibb.co/prBBGZq/Vector.png" />
                            <p className="font-extrabold text-lg">2</p>
                        </div>
                    </div>
                    <p className="text-xs font-bold px-5 pt-2 text-[#5E5E5E]">Indulge in a Memorable One-Time Romantic Dinner for Two.</p>
                    <p className="font-extrabold text-3xl text-center pt-3">$ 898 <span className="text-[#5E5E5E] text-sm">/night</span></p>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;