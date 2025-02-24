const projects = [
  {
    id: "1",
    Title: "PennyTrack",
    Description:
      "A web-based expense tracking application that helps users manage their finances effortlessly. Features an intuitive interface for tracking personal expenses.",
    Img: "/pennytrack.png",
    Link: "https://pennytrack.tech/",
    githubLink: "https://github.com/richmondazadze/expense-tracker/",
    TechStack: ["React", "Tailwind CSS", "Material UI"],
    Features: [
      "Expense tracking",
      "User-friendly interface",
      "Responsive design",
      "Data visualization",
      "Category management",
    ],
  },
  {
    id: "2",
    Title: "Article Summarizer with GPT-4",
    Description:
      "An AI-powered tool that effortlessly summarizes lengthy articles using OpenAI's GPT-4. Users can simply input a URL to get quick insights, making information consumption more efficient and focused.",
    Img: "/summarizer.png", // Make sure to add the screenshot to your public folder
    Link: "https://richmondazadze.github.io/AI-Summarizer/",
    githubLink: "https://github.com/richmondazadze/AI-Summarizer",
    TechStack: ["React", "OpenAI API", "Tailwind CSS", "Vercel"],
    Features: [
      "URL-based article summarization",
      "GPT-4 integration",
      "Clean, modern UI",
      "Instant summaries",
      "Mobile responsive design",
    ],
  },
  {
    id: "3",
    Title: "RichverseEcoTech",
    Description:
      "Empowering businesses for a sustainable future. We combine innovation and sustainability to transform the digital world, offering services in software development, digital marketing, cybersecurity, and renewable energy.",
    Img: "/richverseecotech.png", // Make sure to add the screenshot to your public folder
    Link: "https://richverseecotech.com/", // Update with the actual link
    githubLink: "https://github.com/richmondazadze/RichverseEcoTech-Website", // Update with the actual GitHub link
    TechStack: ["React", "Node.js", "Tailwind CSS", "Express", "MongoDB"],
    Features: [
      "Innovative software solutions",
      "Comprehensive digital marketing",
      "Robust cybersecurity measures",
      "Focus on renewable energy",
      "User-friendly interface",
    ],
  },
];

export default projects;

export const totalProjectsCount = projects.length;
