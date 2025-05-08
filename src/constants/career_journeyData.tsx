type taskProps = {
  description: string;
};


type careerJourneyDataProps = {
  title: string;
  company: string;
  time: string;
  tasks: taskProps[];
}

export const careerJourneyData: careerJourneyDataProps[] = [
  {
    title: "Frontend Developer",
    company: "Google",
    time: "Jul 2024 - Present",
    tasks: [
      { 
        description: "Developed and maintained responsive web applications, improving load times by 30% through performance optimization."
      },
      { 
        description: "Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS."  
      },
      { 
        description: "Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality." 
      },
      { 
        description: "Implemented interactive animations and dynamic features, enhancing user engagement by 25%." 
      },
    ],
  },
  {
    title: "Frontend Developer",
    company: "Slack",
    time: "Jul 2023 - Jul 2024",
    tasks: [
      { 
        description: "Developed and maintained responsive web applications, improving load times by 30% through performance optimization."
      },
      { 
        description: "Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS."  
      },
      { 
        description: "Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality." 
      },
      { 
        description: "Implemented interactive animations and dynamic features, enhancing user engagement by 25%." 
      },
    ],
  },
  {
    title: "Frontend Developer",
    company: "Skype",
    time: "Nov 2021 - Jul 2023",
    tasks: [
      { 
        description: "Developed and maintained responsive web applications, improving load times by 30% through performance optimization."
      },
      { 
        description: "Translated UI/UX designs into functional and visually appealing web interfaces using React and TailwindCSS."  
      },
      { 
        description: "Collaborated with backend teams to integrate APIs, ensuring seamless data flow and functionality." 
      },
      { 
        description: "Implemented interactive animations and dynamic features, enhancing user engagement by 25%." 
      },
    ],
  },
];