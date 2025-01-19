import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="CSCO ChatBot"
          des="CSCO Chatbot, for the College of Information Sciences and Computing Student Council..."
          src={projectOne}
          githubLink="https://github.com/pamisa21/chatbot.git"
          liveLink="https://live-link-1.com"
        />
        <ProjectsCard
          title="CMU UniTalent"
          des="A web and mobile application designed for Central Mindanao University..."
          src={projectTwo}
          githubLink="https://github.com/pamisa21/UniTalentMobile.git"
          liveLink="https://live-link-2.com"
        />
        <ProjectsCard
          title="Com Fes - Faculty Evaluation System"
          des="A Flask and Tailwind CSS application using a Twitter-based sentiment model..."
          src={projectThree}
          githubLink="https://github.com/pamisa21/Capstone-FInal.git"
          liveLink="https://live-link-3.com"
        />
        <ProjectsCard
          title="Farm Aid"
          des="A mobile and web application designed as an e-commerce management system..."
          src={projectFour}
          liveLink="https://www.figma.com/design/6hNbJt7R8c7rpVkfOPUDtW/FarmAid?t=K9NkBhXt31Kzh8e7-0"
        />
        <ProjectsCard
          title="CMU Journal of Science"
          des="A web application designed for Central Mindanao University..."
          src={projectFive}
          liveLink="https://www.figma.com/design/cdAJlPXd2MS4219zQb486l/WebJs?t=SbgPp7cJr7OOf3eG-0"
        />
        <ProjectsCard
          title="Scholarship Accounting System"
          des="A mobile application designed to add scholars and facilitate payments..."
          src={projectSix}
          liveLink="https://www.figma.com/design/xqkyeVMZGIjhllphpkRYjU/Scholarship-Accounting-System?t=2iVsG65JoA9indoN-0"
        />
      </div>
    </section>
  );
};

export default Projects;
