import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-end items-center relative">
      <img
        className="w-full h-full lgl:w-[500px] lgl:h-[680px] object-cover z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne  flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner;
