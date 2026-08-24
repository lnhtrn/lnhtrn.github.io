export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  orcidUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Linh Tran",
  title: "Ph.D. in Information Systems",
  institution: "New Jersey Institute of Technology",
  // title: "Masters of Science in Computer Science",
  // institution: "University of Rochester",
  // Note that links work in the description
  description:
    "I am an incoming Ph.D. student at the New Jersey Institute of Technology, and I will join Dr. Sooyeon Lee's lab to work on Human-Computer Interaction projects for accessibility for the blind and low-vision community. \n\nPreviously, before joining NJIT, I was a M.S. student in Human-Computer Interaction at the University of Rochester, advised by Dr. Yukang Yan. My research explores how artificial intelligence can be integrated into human-centered systems to support diverse user needs in education, healthcare, and everyday life. I aim to develop AI-driven assistive technologies that enhance accessibility, empower underrepresented communities, and promote ethical, transparent design practices.\n\nMy research spans several interconnected directions, including applying generative AI for social good, designing AR/VR assistants for neurodivergent individuals, and creating AI-integrated tools to support healthcare professionals. I’m especially interested in understanding how users interact with intelligent systems and how technology can better adapt to their behaviors, challenges, and goals. Through these projects, I strive to bridge the gap between technical innovation and human empathy, ensuring that AI remains a tool for inclusion rather than exclusion.\n\nBefore starting my M.S. studies, I worked on projects in computer vision, psychology, and digital design that deepened my appreciation for interdisciplinary collaboration. My background in digital arts, creative writing, and programming helps me approach technology from both a technical and humanistic perspective. Through my research, I hope to build frameworks for trustworthy and accessible AI systems that make technology more equitable for everyone.",
  email: "lt297@njit.edu",
  imageUrl: "/images/headshot.jpeg",
  googleScholarUrl: "scholar.google.com/citations?user=zSOzQuwAAAAJ",
  orcidUrl: "orcid.org/0009-0009-3433-2242",
  githubUsername: "lnhtrn",
  linkedinUsername: "linh-ph-tran",
  twitterUsername: "nothing",
  blogUrl: "https://",
  cvUrl: "/data/Tran_Linh_CV.pdf",
  institutionUrl: "https://www.njit.edu/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
