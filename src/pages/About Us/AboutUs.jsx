import { useState } from "react";
import Helmet from "../../Helmet/Helmet";
import Navbar from "../../Navebar/Navebar";
import aboutus from "../../assets/aboutus.png"
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const AboutUs = () => {
    const metaTags = [
        { name: 'description', content: 'This is a description' },
        { property: 'og:title', content: 'Open Graph Title' }
    ];

    const [counterOn, setCounterOn] = useState(false);

    return (
        <div>
            <Helmet title="About Us Page" meta={metaTags} />
            <div className="md:relative">
                <img className="hidden md:block w-full" src={aboutus} alt="" />
                <div className="absolute top-0 md:bg-gradient-to-r from-[#003465B8] via-[#00000000] to-orange-300 w-full h-[352px] lg:h-[672px]">
                    <Navbar></Navbar>
                </div>
            </div>

            <div className="mt-10 max-w-[1320px] mx-auto flex flex-col lg:flex-row justify-between items-center">
                <img src="https://i.ibb.co/wNPNc48/luxury-redefined.png" />
                <div>
                    <div className="lg:w-[600px] p-5 lg:p-0">
                        <h1 className="text-4xl md:text-5xl mt-5 lg:mt-0 font-extrabold">About our <span className="text-cyan-400">Hotel</span></h1>
                        <p className="text-sm md:text-base mt-5 text-gray-500">Ocean Side Hotel, a tranquil haven nestled along the pristine shoreline, offers a captivating blend of luxury and coastal charm. With breathtaking views of the shimmering ocean, our hotel provides an idyllic escape for those seeking relaxation and rejuvenation. Immerse yourself in our elegantly appointed rooms, each designed to provide a comfortable retreat after a day of exploration. Indulge in exquisite dining at our seaside restaurant, where fresh, locally sourced ingredients are crafted into culinary masterpieces. Whether you are here for business or leisure, Ocean Side Hotel promises a memorable stay where the soothing rhythm of the waves becomes your constant companion.</p>
                    </div>
                </div>
            </div>
            <div className="mt-10 max-w-[1320px] mx-auto flex flex-col-reverse lg:flex-row gap-5 lg:gap-0 justify-between items-center">
                <div>
                    <div className="lg:w-[600px] p-5 lg:p-0">
                        <h1 className="text-4xl md:text-5xl font-extrabold">Exclusive <span className="text-cyan-400">Delicacies</span></h1>
                        <p className="text-sm md:text-base mt-5 text-gray-500">Indulge in a culinary journey like no other at Ocean Side Hotel's renowned dining establishment, "Exclusive Delicacies." Our chefs artfully blend flavors from around the world, presenting a menu that reflects sophistication and innovation. Immerse yourself in an ambiance of refined elegance as you savor each dish meticulously crafted with premium, locally sourced ingredients. From delectable seafood creations to exquisitely plated desserts, every bite is a symphony of taste and texture. "Exclusive Delicacies" promises a dining experience that transcends the ordinary, inviting you to savor the extraordinary at the heart of Ocean Side Hotel.</p>
                    </div>
                </div>
                <img src="https://i.ibb.co/y0yF9L9/delicacies.png" />
            </div>


            {/* use react-countUp */}
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                <div className="my-16 md:my-32 flex flex-col md:flex-row justify-center gap-10 lg:gap-20">
                    <div className="text-cyan-500">
                        {
                            counterOn &&
                            <h1 className="text-4xl lg:text-5xl text-center font-extrabold">
                                <CountUp start={0} end={8} duration={2} />
                            </h1>
                        }
                        <p className="text-lg lg:text-2xl text-center font-extrabold">YEARS OF SERVICE</p>
                    </div>
                    <div className="text-cyan-500">
                        {
                            counterOn &&
                            <h1 className="text-4xl lg:text-5xl text-center font-extrabold">
                                <CountUp start={0} end={320} duration={2} />
                            </h1>
                        }
                        <p className="text-lg lg:text-2xl text-center font-extrabold">SQ. METER AREA</p>
                    </div>
                    <div className="text-cyan-500">
                        {
                            counterOn &&
                            <h1 className="text-4xl lg:text-5xl text-center font-extrabold">
                                <CountUp start={0} end={40} duration={2} />
                            </h1>
                        }
                        <p className="text-lg lg:text-2xl text-center font-extrabold">NICE ROOMS</p>
                    </div>
                    <div className="text-cyan-500">
                        {
                            counterOn &&
                            <h1 className="text-4xl lg:text-5xl text-center font-extrabold">
                                <CountUp start={0} end={4567} duration={2} /> +
                            </h1>
                        }
                        <p className="text-lg lg:text-2xl text-center font-extrabold">HAPPY VISITORS</p>
                    </div>
                </div>
            </ScrollTrigger>

            <div className="bg-blue-950 py-16">
                <h1 className="text-5xl text-center text-white font-extrabold">Awards</h1>
                <div className="flex flex-col lg:flex-row justify-center gap-8 lg:8gap-24 mt-16">
                    <img className="w-[180px] lg:w-[150px]  mx-auto lg:mx-0 lg:h-[150px]" src="https://i.ibb.co/jhmBV5b/award2.png" />
                    <img className="w-[180px] lg:w-[150px]  mx-auto lg:mx-0 lg:h-[150px]" src="https://i.ibb.co/myVJPdT/award3.png" />
                    <img className="w-[180px] lg:w-[180px]  mx-auto lg:mx-0 lg:h-[150px]" src="https://i.ibb.co/D9drvTM/award1.png" />
                    <img className="w-[180px] lg:w-[150px]  mx-auto lg:mx-0 lg:h-[150px]" src="https://i.ibb.co/N31r6fX/award4.png" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;