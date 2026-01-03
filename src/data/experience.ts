export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const researchExperienceData: Experience[] = [
  {
    date: "Feb 2025–Present",
    title: "Research Assistant",
    company: "ROC-HCI BEAR Lab",
    description:
      "Research an AR assistant integrating real-time object recognition to support ADHD users in managing household tasks.",
    advisor: "Dr. Yukang Yan",
    companyUrl: "https://rochester-bear-lab.github.io/index", // placeholder, update if needed
  },
  // {
  //   date: "Feb 2025–Present",
  //   title: "Researcher",
  //   company: "ROC-HCI BEAR Lab",
  //   description:
  //     "Conducted studies on computer vision methods for adaptive spatial placement in AR/VR environments.",
  //   advisor: "Dr. Yukang Yan",
  //   companyUrl: "https://www.hci.rochester.edu", // same lab
  // },
  {
    date: "Sep 2024–Present",
    title: "Data Science Research Assistant",
    company: "Dye Lab, University of Rochester Medical Center",
    description:
      "Developed an LLM-based system to detect systemic oppression patterns in global COVID-19 survey data.",
    advisor: "Dr. Tim Dye",
    companyUrl: "https://www.urmc.rochester.edu/people/112358836-timothy-d-dye", 
  },
  {
    date: "Jan 2024–Mar 2025",
    title: "Research Assistant",
    company: "kLab, University of Rochester",
    description:
      "Built bias evaluation frameworks for vision-language models, reducing demographic bias while maintaining performance.",
    advisor: "Dr. Christopher Kanan",
    companyUrl: "", 
  },
];


export const workExperienceData: Experience[] = [
  {
    date: "Summer 2025",
    title: "Machine Learning/AI Developer Intern",
    company: "Bryan R. Harrison, PhD Psychologist, PC",
    description:
      "Built an AI-powered clinical tool that generated structured reports from speech to improve workflow efficiency.",
    companyUrl: "https://www.bryanharrisonphd.com", 
  },
  {
    date: "Summer 2023",
    title: "Data Science Intern",
    company: "VinBigData",
    description:
      "Enhanced LLM question classification and deployed multilingual NLP models to improve Q&A accuracy and speed.",
    companyUrl: "https://vinbigdata.org",
  },
  {
    date: "Spring 2021",
    title: "Web Development Intern & Frontend Team Leader",
    company: "HADTech Joint Stock Company",
    description:
      "Led frontend design and development of web and mobile interfaces focused on usability and visual consistency.",
    companyUrl: "", // placeholder, update if needed
  },
];
