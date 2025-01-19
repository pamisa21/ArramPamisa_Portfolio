
import { FaMobile, FaGlobe } from "react-icons/fa";
import {  SiAntdesign } from "react-icons/si";
import { GraduationCap } from "phosphor-react";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="about"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="About Me" des="Education" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 mb-10">
        <Card
          title="High School"
          des="I graduated from Malinao High School in Malinao, Banisilan, North Cotabato, during the 
          academic years 2015-2019 
          as an honor student, with a general average of 90%."
          icon={<GraduationCap  />}
        />
        <Card
          title="Senior High School"
          des="I graduated from Malinao Senior High School in Malinao, Banisilan, North Cotabato,
           during the academic years 2019-2021,
           under the ABM (Accountancy, Business, and Management) strand."
          icon={<GraduationCap  />}
        />
        <Card
          title="College"
          des="I am currently studying at Central Mindanao University in Musuan,
           Maramag, Bukidnon. At present, I am a 4th-year BS Information Technology 
           student majoring in Software Development."
          icon={<GraduationCap  />}
        />
      </div>
      
      <Title  className="p-4 mt-10" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
      <Card
          title="Mobile Development"
          des="Developing efficient and user-friendly mobile applications using Flutter, catering to various platforms with a focus on performance and design."
          icon={<FaMobile />}
        />
        <Card
          title="UI/UX Design"
          des="Creating intuitive and visually appealing user interfaces and experiences using Figma, ensuring seamless user interaction and design consistency."
          icon={<SiAntdesign />}
        />
        <Card
          title="Web Development"
          des="Building responsive and dynamic websites and web applications using Flask, React, PHP, and CodeIgniter, ensuring functionality and scalability."
          icon={<FaGlobe />}
        />

      </div>
      
    </section>
  );
}

export default Features