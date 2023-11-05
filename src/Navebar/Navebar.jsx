import { NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.png"

const Navbar = () => {

    const navlinks = <>
        <div className="md:hidden flex flex-col  items-center">
            <li><img className=" w-[150px]" src={logo} /></li>
            <h1 className="text-red-500 text-xs tracking-[4px]">OCEAN SIDE HOTEL</h1>
        </div>
        <div className="flex gap-6 lg:gap-16 items-center">
            <li><NavLink to="/" className={({ isActive, isPending }) =>
                isActive ? "active text-black font-semibold" : isPending ? "pending" : ""}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/aboutUs" className={({ isActive, isPending }) =>
                    isActive ? "active text-black font-semibold" : isPending ? "pending" : ""}>About us</NavLink>
            </li>

            <li><NavLink to="/gallery" className={({ isActive, isPending }) =>
                isActive ? "active text-black font-semibold" : isPending ? "pending" : ""}>Gallery</NavLink></li>

            <li className="hidden md:flex flex-col items-center"><img className="w-[80px]" src={logo} /><h1 className="text-orange-500 text-xs tracking-[4px]">OCEAN SIDE HOTEL</h1></li>

            <li><NavLink to="/rooms" className={({ isActive, isPending }) =>
                isActive ? "active text-black font-semibold" : isPending ? "pending" : ""}>Rooms</NavLink></li>

            <li><NavLink to="/myBookings" className={({ isActive, isPending }) =>
                isActive ? "active text-black font-semibold" : isPending ? "pending" : ""}>My Bookings</NavLink></li>
        </div>
    </>

    return (

        <div>
            <div className="md:absolute top-10 left-[35px] lg:left-[320px] md:px-8 py-2 bg-white rounded-lg" >
                <ul className="flex flex-col gap-4 md:flex-row items-center mt-4 font-medium  text-gray-500">
                    {navlinks}
                </ul>
            </div>
        </div>

    );
};

export default Navbar;