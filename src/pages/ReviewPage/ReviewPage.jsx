import axios from "axios";
import Swal from "sweetalert2";
import Helmet from "../../Helmet/Helmet";
import { useLoaderData } from "react-router-dom";

const ReviewPage = () => {
    const metaTags = [
        { name: 'description', content: 'This is a description' },
        { property: 'og:title', content: 'Open Graph Title' }
    ];

    const lodeData = useLoaderData();
    const {title} = lodeData;
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const photoUrl = e.target.elements.photo.value;
        const room = e.target.elements.room.value;
        const rating = e.target.elements.rating.value;
        const comment = e.target.elements.comment.value;
        console.log(name, photoUrl, room, rating, comment);

        const review = {name, photoUrl, room, rating, comment};
        console.log(review)
        axios.post("https://ocean-side-hotel-server-side.vercel.app/reviews",review)
                .then(data => {
                    console.log(data);
                    if (data.data.insertedId) {
                        Swal.fire({
                            title: 'Good job!',
                            text: 'Review added successfully.',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                    }
                })
    }

    return (
        <div>
            <Helmet title="Review Page" meta={metaTags} />
            <h1 className="text-2xl md:text-4xl font-extrabold text-center mt-20 mb-5">Add Your Review About Us</h1>
            <div className="lg:w-2/4 bg-green-200 rounded-lg py-10 flex justify-center mx-5 lg:mx-auto mb-20">
                <form onSubmit={handleSubmit} className="grid grid-col-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="mx-auto mb-3 input input-bordered input-info w-full max-w-xs" required/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Your Name" className="mx-auto mb-3 input input-bordered input-info w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Select Room</span>
                        </label>
                        <input type="text" name="room" defaultValue={title} disabled className="mx-auto mb-3 input input-bordered input-info w-full max-w-xs" required/>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="Rating" className="mx-auto mb-3 input input-bordered input-info w-full max-w-xs" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Your comment</span>
                        </label>
                        <textarea name="comment" className="textarea textarea-info textarea-lg" placeholder="write here"></textarea>
                    </div>
                    <button type="submit" className="btn btn-info mt-5 text-white hover:bg-blue-600">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ReviewPage;