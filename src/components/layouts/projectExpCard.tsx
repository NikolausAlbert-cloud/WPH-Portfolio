import { StaticImageData } from "next/image";
import Project1_Image from "../../../public/images/project1.jpg";
import Project2_Image from "../../../public/images/project2.jpg";
import Project3_Image from "../../../public/images/project3.jpg";
import Project4_Image from "../../../public/images/project4.jpg";
import Project5_Image from "../../../public/images/project5.jpg";
import Project6_Image from "../../../public/images/project6.jpg";

type SkillProps = {
  skill: string;
}

type ProjectExpCardProps = {
  src: StaticImageData;
  title: string;
  skills: SkillProps[];
  description: string;
}

export const ProjectExpCard: ProjectExpCardProps[] = [
  {
    src: Project1_Image,
    title: "Landing Page",
    skills: [{ skill: "HTML" }, { skill: "CSS" }, { skill: "React" }],
    description: "THE BIGGEST community event in Indonesia, which will run for 30 full days with the theme 'Unity in Creativity'"
  },
  {
    src: Project2_Image,
    title: "Landing Page",
    skills: [{ skill: "React" }, { skill: "HTML" }, { skill: "CSS" }],
    description: "Private hospital in the city of Padang that provides special surgical services."
  },
  {
    src: Project3_Image,
    title: "Landing Page",
    skills: [{ skill: "React" }, { skill: "HTML" }, { skill: "CSS" }],
    description: "Product engaged in WhatsApp API services and other information technology services."
  },
  {
    src: Project4_Image,
    title: "Landing Page",
    skills: [{ skill: "React" }, { skill: "HTML" }, { skill: "CSS" }],
    description: "nusa.id cloud is part of the Nusanet Group (PT. Media Antar Nusa) of experience as an internet solution provider company"
  },
  {
    src: Project5_Image,
    title: "Landing Page",
    skills: [{ skill: "React" }, { skill: "HTML" }, { skill: "CSS" }],
    description: "UKUR is a constructor and interior marketplace in Indonesia."
  },
  {
    src: Project6_Image,
    title: "Landing Page",
    skills: [{ skill: "React" }, { skill: "HTML" }, { skill: "CSS" }],
    description: "Product engaged in WhatsApp API services and other information technology services."
  }
];
