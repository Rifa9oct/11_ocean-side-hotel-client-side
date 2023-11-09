import { Link } from "react-router-dom";
import error from "../../assets/error.jpg"
import Helmet from "../../Helmet/Helmet";
const ErrorPage = () => {
    const metaTags = [
        { name: 'description', content: 'This is a description' },
        { property: 'og:title', content: 'Open Graph Title' }
    ];

    return (
        <div>
            <Helmet title="Error Page" meta={metaTags} />
            <img className="w-full mt-16" src={error} />
            <h1 className="text-center font-extrabold text-4xl mt-5">We can not find that page !</h1>
            <div className="flex justify-center mb-16">
                <Link to="/"><button className="bg-blue-500 py-2 px-4 text-white font-semibold rounded-lg mt-5 hover:scale-105">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;