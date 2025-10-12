export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "Submitted to IEEE Big Data 2025",
    title: "Assessing Historical Structural Oppression Worldwide via Rule-Guided Prompting of Large Language Models",
    authors: "Sreejato Chatterjee, <b>Linh Tran</b>, Quoc Duy Nguyen, Roni Kirson, Drue Hamlin, Harvest Aquino, Hanjia Lyu, Jiebo Luo, Timothy Dye",
    paperUrl: "https://arxiv.org/abs/2509.15216",
    codeUrl: "https://github.com/chattergpt/llm-oppression-benchmark",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Using large language models to create a new way to measure historical oppression across countries by analyzing self-identified ethnicities and generating context-aware, interpretable scores of oppression.",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  // {
  //   year: "2023",
  //   conference: "ICML",
  //   title: "Robust Causal Discovery Under Distribution Shift",
  //   authors: "Jane Smith, Xue Chen, Sarah Johnson",
  //   paperUrl: "https://arxiv.org/abs/2302.13095",
  //   codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  // },
];
