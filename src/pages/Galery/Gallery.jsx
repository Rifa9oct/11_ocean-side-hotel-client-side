import Helmet from "../../Helmet/Helmet";
import Navbar from "../../Navebar/Navebar";

const Gallery = () => {
    const metaTags = [
        { name: 'description', content: 'This is a description' },
        { property: 'og:title', content: 'Open Graph Title' }
    ];
    return (
        <div>
            <Helmet title="Gallery Page" meta={metaTags} />
            <div>
                <div className="md:relative w-full h-[500px] bg-cyan-400">
                    <div className="absolute top-0 w-full h-[352px] lg:h-[678px]">
                        <Navbar></Navbar>
                    </div>
                    <h1 className="absolute text-4xl top-1/2 left-[30%] md:text-6xl mt-5 lg:mt-0 text-white font-extrabold" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000">Overview of our Hotel</h1>
                </div>
            </div>

            <div className="grid absolute top-[400px] grid-cols-1 lg:grid-cols-2 items-center gap-4 justify-center">
                <div className="flex flex-col md:flex-row gap-3 lg:gap-4">
                    <div className="h-[380px] overflow-hidden">
                        <img className="h-[380px] transform transition-transform hover:scale-110" src="https://i.ibb.co/TP8tgwk/13.png" />
                    </div>
                    <div className="h-[380px] overflow-hidden">
                        <img className="h-[380px] transform transition-transform hover:scale-110" src="https://i.ibb.co/1KLhyxb/17.png" />
                    </div>
                </div>
                <div className="h-[380px] overflow-hidden">
                    <img className="h-[380px] w-full transform transition-transform hover:scale-110" src="https://i.ibb.co/hM8CSSh/14.png" />
                </div>

                <div className="h-[380px] overflow-hidden">
                    <img className="h-[380px] w-full transform transition-transform hover:scale-110" src="https://i.ibb.co/tJ5WDd4/amenities-5.png" />
                </div>
                <div className="flex flex-col md:flex-row gap-3 lg:gap-4">
                    <div className="h-[380px] overflow-hidden">
                        <img className="h-[380px] transform transition-transform hover:scale-110" src="https://i.ibb.co/C0tSHJm/15.png" />
                    </div>
                    <div className="h-[380px] overflow-hidden">
                        <img className="h-[380px] transform transition-transform hover:scale-110" src="https://i.ibb.co/q99PmRh/16.png" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 lg:gap-4">
                    <div className="h-[380px] overflow-hidden">
                        <img className="h-[380px] transform transition-transform hover:scale-110" src="https://i.ibb.co/80rGMRY/Untitled-1.png" />
                    </div>
                    <div className="h-[380px] overflow-hidden">
                        <img className="h-[380px] transform transition-transform hover:scale-110" src="https://i.ibb.co/F7s5Y8J/8.png" />
                    </div>
                </div>
                <div className="h-[380px] overflow-hidden">
                    <img className="h-[380px] w-full transform transition-transform hover:scale-110" src="https://i.ibb.co/2WS3DZw/2.png" />
                </div>

                <div className="h-[380px] overflow-hidden">
                    <img className="h-[380px] w-full transform transition-transform hover:scale-110" src="https://i.ibb.co/Z6xbq1g/7.png" />
                </div>
                <div className="flex flex-col md:flex-row gap-3 lg:gap-4">
                    <div className="h-[380px] overflow-hidden">
                        <img className="h-[380px] transform transition-transform hover:scale-110" src="https://i.ibb.co/7Nm3DX3/business-people-checkin.png" />
                    </div>
                    <div className="h-[380px] overflow-hidden">
                        <img className="h-[380px] transform transition-transform hover:scale-110" src="https://i.ibb.co/PDjmJDN/5.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;