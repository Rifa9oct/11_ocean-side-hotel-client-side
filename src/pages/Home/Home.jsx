import { useContext } from "react";
import Navbar from "../../Navebar/Navebar";
import bannar from "../../assets/bannar.png"
import "./home.css"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Imagery from "./Imagery";
import SpecialOffers from "./SpecialOffers";
import Newsletter from "./Newsletter";
import FeaturedRooms from "./FeaturedRooms";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Helmet from "../../Helmet/Helmet";


const Home = () => {
    const metaTags = [
        { name: 'description', content: 'This is a description' },
        { property: 'og:title', content: 'Open Graph Title' }
    ];


    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Thank you',
                    'Logout successfully',
                    'success'
                )
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Helmet title="Home Page" meta={metaTags} />
            {/* bannar sec */}
            <div className="md:relative">
                <div>
                    <img className="hidden md:block w-full" src={bannar} alt="" />
                </div>
                <Navbar></Navbar>
                <div className="md:absolute md:left-[50px] lg:left-[320px]  md:top-[180px] lg:top-[300px]">
                    <h1 className="header hidden md:block mb-3 text-4xl lg:text-6xl font-bold">Discover Extraordinary<br />Comfort in Hotels</h1>
                    {
                        user ? <button onClick={handleLogout} className="lg:mt-5 ml-[150px] md:ml-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold py-2 px-8 hover:scale-105 rounded-2xl">Sign Out</button> :
                            <Link to="/login"><button className="lg:mt-5 ml-[150px] md:ml-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold py-2 px-8 hover:scale-105 rounded-2xl">Sign in</button></Link>
                    }
                </div>
            </div>

            <Imagery></Imagery>
            <SpecialOffers></SpecialOffers>
            <Newsletter></Newsletter>
            <FeaturedRooms></FeaturedRooms>
            <Footer></Footer>
        </div>
    );
};

export default Home;