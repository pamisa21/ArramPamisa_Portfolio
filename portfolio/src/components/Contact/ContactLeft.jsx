
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Arram Pamisa</h3>
        <p className="text-lg font-normal text-gray-400">
         UI/UX and Front-end Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Get in touch with us for any inquiries, feedback, or assistance.
         We're here to help you with your questions and provide the support you need
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+63 9629394124</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">arrampamisa21@gmai.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont text-designColor mb-4">Find me in</h2>
        <div className="flex gap-4">
        <a 
            href="https://www.facebook.com/arram.pamisa.21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>

          
          
        </div>
      </div>
    </div>
  );
}

export default ContactLeft