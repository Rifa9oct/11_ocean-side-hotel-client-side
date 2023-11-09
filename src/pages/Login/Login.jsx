import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Helmet from "../../Helmet/Helmet";

const Login = () => {
    const metaTags = [
        { name: 'description', content: 'This is a description' },
        { property: 'og:title', content: 'Open Graph Title' }
    ];

    const [showPassword, setShowPassword] = useState(false);
    const { signinUser, setLogin, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signinUser(email, password)
            .then(() => {
                Swal.fire("Good job", "Login successful", "success");
                setLogin(true);
                navigate(location?.state ? location.state : "/")
                e.target.reset();
            })
            .catch(error => {
                Swal.fire("Login Error", error.message, "error")
                console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="relative mx-5 lg:mx-auto p-3 md:p-10 text-center mb-20 lg:mb-0 mt-28 max-w-[850px] h-[400px] md:h-[450px] bg-purple-200 shadow-2xl rounded-[30px]">
            <Helmet title="Sign In Page" meta={metaTags} />
            <div className="w-2/4">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-black">Sign In</h1>
                {/* continue with google */}
                <div className="flex items-center md:w-[70%] lg:w-[60%] justify-center mx-auto mt-4 bg-[#F4F4F4] py-2 text-gray-500 hover:text-blue-500 font-semibold shadow-md rounded-3xl hover:scale-105">  
                    <button onClick={handleGoogleSignIn} className="text-xs md:text-base"><FcGoogle className="inline text-2xl mr-2"></FcGoogle>Continue with google</button>
                </div>

                <p className="text-xs md:text-sm text-gray-600 mt-3">or use your email password</p>

                <div>
                    <form onSubmit={handleLogin}>
                        <div className="form-control mt-5 md:mt-10 mb-3 mr-3 md:mr-8">
                            <input type="email" name="email" placeholder="Email" className="input" required />
                        </div>
                        <div className="form-control">
                            <div className="relative mr-3 md:mr-8">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password" placeholder="Password" className="input w-full" required />
                                <span className="absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                    }
                                </span>
                            </div>

                            <label className="text-center mt-3">
                                <a href="#" className="text-sm text-gray-600 link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="w-3/4 mx-auto mt-6">
                            <button type="submit" className="bg-purple-700 font-semibold text-white py-2 px-4 w-24 md:w-32 rounded-3xl hover:scale-105">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
            
            {/* left side */}
            <div className="absolute bg-purple-700 w-2/4 h-[400px] md:h-[450px] top-0 right-0 rounded-tl-[150px] rounded-r-[30px] rounded-bl-[100px]">
                <div className="mt-16 md:mt-32 p-8">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white">Hello, Friend !</h1>
                    <p className="text-sm text-white my-3">Register with your personal details to use all of site features.</p>
                   <Link to="/register"> <button className="font-semibold text-purple-700 bg-white py-2 px-4 w-24 md:w-32 rounded-3xl hover:scale-105 ">Sign Up</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;