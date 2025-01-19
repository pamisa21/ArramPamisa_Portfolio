import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaSkype,
  
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiFlask , SiPhp} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Project Manager", "Front-end Developer.", "UI/UX Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 px-3 md:px-12 ">
      <div className="flex flex-col gap-5">
        
        <h1 className="text-6xl font-bold text-white">
          Hi, I&apos;m <span className="text-designColor capitalize">Arram Pamisa</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-gray-400">
        I am a BSIT student majoring in Software Development at Central Mindanao University 
        in Musuan, Maramag, Bukidnon, Philippines. I specialize in creating systems using React 
        and designing UI/UX with Figma and Framer. My expertise includes both frontend and backend development, particularly with Python Flask.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div className="p-4">
          <h2 className="text-base uppercase font-titleFont mb-4 text-designColor">Find me in</h2>
          <div className="flex gap-4">
            <a href="https://github.com/pamisa21" target="_blank" rel="noopener noreferrer" title="Github Account">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.facebook.com/arram.pamisa.21/" target="_blank" rel="noopener noreferrer" title="Facabook Account">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://join.skype.com/invite/urH430uf4fUG/" target="_blank" rel="noopener noreferrer" title="Skype Account">
              <span className="bannerIcon">
                <FaSkype />
              </span>
            </a>
           
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-base uppercase font-titleFont mb-4 text-designColor">BEST SKILL ON</h2>
          <div className="flex gap-4">
            <span className="bannerIcon" title="React">
              <FaReact />
            </span>
            <span className="bannerIcon" title="Flask">
              <SiFlask />
            </span>
            <span className="bannerIcon" title="Tailwind CSS">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon" title="Figma">
              <SiFigma />
            </span>
            <span className="bannerIcon" title="PHP">
              <SiPhp />
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
