import Header from "../components/navbar";
import Banner from "../components/Hero/Banner"; 
import About from "../components/About/About";


import Project from "../components/Project/Projects";
import Contact from "../components/Contact/Contact";
import FooterBottom from "../components/Footer/FooterBottom";
export default function Home () {
    return (
     <div 
       style={{ backgroundColor: '#212428', minHeight: '100vh' }} 
       className="flex flex-col justify-center items-center mx-auto px-3 md:px-12" // Flexbox centering
     >
        <Header />
        <Banner /> 
        <About/>
        <Project/>
        <Contact/>
        <FooterBottom/>
     </div>
    );
}
