import Helmet from "../../Helmet/Helmet";
import Navbar from "../../Navebar/Navebar";
import gallery from "../../assets/gallery.png"

const Gallery = () => {
    const metaTags = [
        { name: 'description', content: 'This is a description' },
        { property: 'og:title', content: 'Open Graph Title' }
    ];
    return (
        <div>
            <Helmet title="Gallery Page" meta={metaTags} />
            <div>
                <div className="md:relative">
                    <div>
                        <img className="hidden md:block w-full" src={gallery} alt="" />
                    </div>
                    <div className="absolute top-0 w-full h-[352px] lg:h-[678px]">
                        <Navbar></Navbar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;