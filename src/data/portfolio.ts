export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  award?: string;
}

export const portfolioData: Portfolio[] = [
  // {
  //   title: "LLMs as Sociologists: Leveraging AI/ML Contextual Knowledge for Social Oppression",
  //   description: "Collaborated with epidemiologists to develop a LLM-based tool that analyzes global COVID-19 survey responses for indicators of systemic oppression and demographic bias.",
  //   technologies: ["Python", "Transformers", "Large Language Model"],
  //   projectUrl: "https://github.com/lnhtrn/Global-Ethnicity/",
  //   imageUrl: "",
  //   codeUrl: "https://github.com/lnhtrn/Global-Ethnicity/",
  //   award: ""
  // },
  {
    title: "AR Housework Assistant for Individuals with Executive Dysfunction",
    description: "Enabled context-aware task prompting for individuals with ADHD by integrating real-time object recognition into an Meta Quest 3S to reduce executive dysfunction during household chores.",
    technologies: ["C#", "Unity", "Sentis", "Python"],
    projectUrl: "/adhd-assist",
    imageUrl: "",
    codeUrl: "",
    award: ""
  },
  // {
  //   title: "Investigation of Racial Bias in Vision-Language Assistants in Workplace Settings",
  //   description: "Detect and analyze bias in Vision-Language Assistants (VLAs) used for hiring systems, showcasing that VLAs carried stereotypes and bias in them that can potentially harm candidate's chances of getting hired.",
  //   technologies: ["Python", "Transformers", "Vision-Language Model"],
  //   projectUrl: "https://github.com/lnhtrn/VLA-Workspace",
  //   imageUrl: "",
  //   codeUrl: "https://github.com/lnhtrn/VLA-Workspace",
  //   award: "Poster Presentation at ACM NYCWiC '25"
  // },
  {
    title: "URHungry - DandyHack",
    description: "A web platform developed by Python and Taipy, enabling students to merge orders and collectively meet minimum price requirements for free shipping from popular grocery stores.",
    technologies: ["Python", "Taipy", "CSS", "pandas"],
    projectUrl: "https://github.com/javac0f/URHungry/",
    imageUrl: "",
    codeUrl: "https://github.com/javac0f/URHungry/",
    award: ""
  },
  {
    title: "DoubletDetection - GIDS Biomedical Data Science Hackathon",
    description: "Implementation and optimization of DoubletDetection to predict doublet cells in single cell sequencing data, achieving a MCC score of 0.556.",
    technologies: ["Python", "DoubletDetection", "numpy", "pandas", "matplotlib", "seaborn"],
    projectUrl: "https://github.com/lnhtrn/Hackathon-Summer-2023",
    imageUrl: "",
    codeUrl: "https://github.com/lnhtrn/Hackathon-Summer-2023",
    award: "First place Undergraduate Division"
  },
  {
    title: "MRC with Increased Negative Samples",
    description: "Analysis of DeBERTa v3's performance on SQuAD 2.0 dataset, with and without generated negative samples.",
    technologies: ["Python", "Huggingface", "Transformer", "TensorFlow", "PyTorch", "numpy", "pandas", "matplotlib", "seaborn"],
    projectUrl: "https://github.com/lnhtrn/SQuAD-DeBERTa-negative-samples",
    imageUrl: "",
    codeUrl: "https://github.com/lnhtrn/SQuAD-DeBERTa-negative-samples",
    award: ""
  },
  {
    title: "GoodSoup - DandyHack",
    description: "A project that analyzes students’ allergies and food restrictions on University of Rochester's Dining Service’s daily recipes.",
    technologies: ["Python", "API", "numpy", "pandas"],
    projectUrl: "https://devpost.com/software/goodsoup",
    imageUrl: "",
    codeUrl: "https://devpost.com/software/goodsoup",
    award: "Winner of Community Track"
  },
  {
    title: "Rocky Road - CSC 214 Hackathon",
    description: "An endless running game inspired by University of Rochester's mascot Rocky.",
    technologies: ["Swift (iOS)", "Figma"],
    projectUrl: "https://github.com/lnhtrn/Rocky-Road",
    imageUrl: "",
    codeUrl: "https://github.com/lnhtrn/Rocky-Road",
    award: "Second place - Silver Joker prize"
  },
  // {
  //   title: "Reversi",
  //   description: "A Java implementation of the game Reversi/Othello. The computer's logic is determined by randomization or Minimax algorithm.",
  //   technologies: ["Java"],
  //   projectUrl: "https://github.com/lnhtrn/Reversi",
  //   imageUrl: "",
  //   codeUrl: "https://github.com/lnhtrn/Reversi",
  //   award: ""
  // }
];
