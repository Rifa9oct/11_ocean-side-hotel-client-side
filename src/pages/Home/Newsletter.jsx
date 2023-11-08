
const Newsletter = () => {
    return (
        <div className="bg-purple-100 py-16 my-40  overflow-x-hidden">
            <div className="max-w-[1200px] mx-auto"  data-aos="zoom-in-down">
                <h4 className="tracking-[6px] text-[#2200ff] text-lg font-semibold text-center">OUR TEAM</h4>
                <h2 className="text-center text-black text-4xl font-extrabold">Subscribe Our Newsleter</h2>
                <div className="flex flex-col md:flex-row justify-between items-center mt-10">
                    <img className="w-[340px] h-[320px]" src="https://i.ibb.co/Y8Cy88N/Frame.png" />
                    <div>
                        <p className="lg:w-[700px] text-gray-500 px-5 md:px-0">Subscribe to Our Newsletter for Exclusive Hotel Deals! Be the first to receive special offers, discounts, and travel tips directly to your inbox. Join our mailing list to stay in the loop and save on your next hotel booking.</p>
                        <form>
                            <input className="ml-[40px] md:ml-0 border outline-none my-8 bg-white shadow-lg py-4 lg:w-[600px] px-[67px] rounded-[50px]" type="email" placeholder="Your E-mail here..." />
                        </form>
                        <button className="ml-[50px] md:ml-0  lg:w-[600px] text-white hover:scale-105 font-semibold px-16 lg:px-0 py-3 rounded-xl text-center bg-[#F60]">Subscribe Our Newsletter</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Newsletter;