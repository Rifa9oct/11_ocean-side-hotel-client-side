import { FaTwitter,FaLinkedinIn } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { GrYoutube } from 'react-icons/gr';

const Footer = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center h-[150px] gap-6 bg-blue-950">
            <ul className='text-white flex gap-10 text-3xl'>
                <a><li><BsFacebook /></li></a>
                <a><li><FaTwitter /></li></a>
                <a><li><FaLinkedinIn /></li></a>
                <a><li><GrYoutube /></li></a>
            </ul>
            <p className="text-center text-xs text-white">Copyright © 2023 - All right reserved</p>
        </div>
    );
};

export default Footer;