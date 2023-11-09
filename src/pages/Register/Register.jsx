import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Helmet from "../../Helmet/Helmet";


const Register = () => {
    const metaTags = [
        { name: 'description', content: 'This is a description' },
        { property: 'og:title', content: 'Open Graph Title' }
    ];

    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photoUrl, email, password)

        //password verification
        if (password.length < 6) {
            Swal.fire("Opps!", "Password should be at least 6 characters or longer", "error");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire("Opps!", "Your password should have at least an uppercase character", "error");
            return;
        }
        else if (!/[^\w]/.test(password)) {
            Swal.fire("Opps!", "Your password should have at least a special character", "error");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire("Great!", "Registration successful", "success");
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoUrl
                })
                e.target.reset();
            })
            .catch(error => {
                Swal.fire("Opps!", error.message, "error");
            })
    }

    return (
        <div className="relative mx-5 flex flex-row-reverse lg:mx-auto p-3 md:p-10 text-center mb-20 lg:mb-0 mt-28 max-w-[850px] h-[400px] md:h-[450px] bg-purple-200 shadow-2xl rounded-[30px]">
            <Helmet title="Sign Up Page" meta={metaTags} />
            {/* righ side side */}
            <div className="absolute bg-purple-700 w-2/4 h-[400px] md:h-[450px] top-0 left-0 rounded-tr-[150px] rounded-l-[30px] rounded-br-[100px]">
                <div className="mt-16 md:mt-32 p-8">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white">Welcome Back</h1>
                    <p className="text-sm text-white my-3">Register with your personal details to use all of site features.</p>
                    <Link to="/login"> <button className="font-semibold text-purple-700 bg-white py-2 px-4 w-24 md:w-32 rounded-3xl hover:scale-105 ">Sign In</button></Link>
                </div>
            </div>

            <div className="w-2/4">
                <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold text-black">Create Account</h1>

                <div>
                    <form onSubmit={handleRegister}>
                        <div className="form-control mt-5 ml-3 md:ml-8">
                            <input type="text" name="name" placeholder="Name" className="input" required />
                        </div>
                        <div className="form-control mt-3 ml-3 md:ml-8">
                            <input type="text" name="photo" placeholder="Photo Url" className="input" />
                        </div>
                        <div className="form-control mt-3 mb-3 ml-3 md:ml-8">
                            <input type="email" name="email" placeholder="Email" className="input" required />
                        </div>
                        <div className="form-control">
                            <div className="relative ml-3 md:ml-8">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password" placeholder="Password" className="input w-full" required />
                                <span className="absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                    }
                                </span>
                            </div>
                        </div>

                        <div className="w-3/4 mx-auto mt-6">
                            <button type="submit" className="bg-purple-700 font-semibold text-white py-2 px-4 w-24 md:w-32 rounded-3xl hover:scale-105">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;