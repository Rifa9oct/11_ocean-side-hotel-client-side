import { useContext } from "react";
import Navbar from "../../Navebar/Navebar";
import bannar from "../../assets/bannar.png"
import "./home.css"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Home = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
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
        <div className="md:relative">
            <div>
                <img className="hidden md:block w-full" src={bannar} alt="" />
            </div>
            <Navbar></Navbar>
            <div className="md:absolute md:left-[50px] lg:left-[320px]  md:top-[220px] lg:top-[300px]">
                <h1 className="header hidden md:block mb-3text-4xl lg:text-6xl font-bold">Discover Extraordinary<br />Comfort in Hotels</h1>
                <button onClick={handleLogout} className=" mt-5  bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold py-2 px-8 hover:scale-105 rounded-2xl">
                    {
                        user ? "Sign Out" : "Sign In"
                    }
                </button>
            </div>
        </div>
    );
};

export default Home;