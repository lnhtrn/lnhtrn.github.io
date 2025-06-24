export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2025-Present",
    institution: "University of Rochester",
    degree: "M.S. in Computer Science",
    // advisor: "Prof. Sarah Johnson",
  },
  {
    year: "2020-2024",
    institution: "University of Rochester",
    degree: "B.S. in Computer Science, minor in Mathematics",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
