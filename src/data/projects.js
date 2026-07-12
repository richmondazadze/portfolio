// Portfolio projects — migrated from the previous site.
// `slug` is used for routing (/work/:slug); `featured` items surface on the home page.
const projects = [
  {
    slug: 'atmowise',
    title: 'AtmoWise',
    category: 'AI · Web App',
    year: '2025',
    description:
      'A modern air quality tracking application providing real-time data and AI-powered health insights. Features multi-source air quality data, symptom tracking, and personalized recommendations.',
    image: '/atmowise.webp',
    link: 'https://atmowise.vercel.app/',
    github: 'https://github.com/richmondazadze/atmowise',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'OpenRouter API'],
    features: [
      'Multi-source air quality data',
      'AI-powered health insights',
      'Symptom tracking',
      'Location management',
      'Dark mode support',
    ],
    featured: true,
  },
  {
    slug: 'sankpost-ai',
    title: 'Sankpost AI',
    category: 'AI · SaaS',
    year: '2025',
    description:
      'An AI-powered social media content generator that helps creators, entrepreneurs, and brands instantly generate high-quality content using advanced AI models. Users can create posts aligned with their brand voice and publish faster, saving time while maintaining creativity.',
    image: '/sankpost.webp',
    link: 'https://sankpost.me',
    github: 'https://github.com/richmondazadze/sankpost',
    tech: ['Next.js', 'Tailwind CSS', 'Clerk Auth', 'Gemini AI API', 'NeonDB', 'Vercel'],
    features: [
      'AI-generated captions and content in seconds',
      'Brand voice customization with tone control',
      'Secure user authentication with Clerk',
      'Fast, serverless deployment via Vercel',
      'Responsive design optimized for mobile and desktop',
      'Save and copy posts directly to clipboard',
    ],
    featured: true,
  },
  {
    slug: 'pennytrack',
    title: 'PennyTrack',
    category: 'Full-Stack · Fintech',
    year: '2024',
    description:
      'A web-based expense tracking application that helps users manage their finances effortlessly. Features an intuitive interface for tracking personal expenses.',
    image: '/pennytrack.webp',
    link: 'https://pennytrack.netlify.app/',
    github: 'https://github.com/richmondazadze/expense-tracker/',
    tech: ['React', 'Tailwind CSS', 'Firebase', 'Firebase Auth'],
    features: [
      'Expense tracking',
      'User-friendly interface',
      'Responsive design',
      'Data visualization',
      'Category management',
    ],
    featured: true,
  },
  {
    slug: 'ai-summarizer',
    title: 'Article Summarizer',
    category: 'AI · Tool',
    year: '2024',
    description:
      "An AI-powered tool that effortlessly summarizes lengthy articles using OpenAI's GPT-4. Users can simply input a URL to get quick insights, making information consumption more efficient and focused.",
    image: '/summarizer.webp',
    link: 'https://richmondazadze.github.io/AI-Summarizer/',
    github: 'https://github.com/richmondazadze/AI-Summarizer',
    tech: ['React', 'OpenAI API', 'Tailwind CSS'],
    features: [
      'URL-based article summarization',
      'GPT-4 integration',
      'Clean, modern UI',
      'Instant summaries',
      'Mobile responsive design',
    ],
    featured: true,
  },
  {
    slug: 'richverse-ecotech',
    title: 'RichverseEcoTech',
    category: 'Web · Corporate',
    year: '2024',
    description:
      'Empowering businesses for a sustainable future. Combining innovation and sustainability to transform the digital world, offering services in software development, digital marketing, cybersecurity, and renewable energy.',
    image: '/richverseecotech.webp',
    link: 'https://richverseecotech.com/',
    github: 'https://github.com/richmondazadze/RichverseEcoTech-Website',
    tech: ['React', 'Tailwind CSS', 'Formspree API'],
    features: [
      'Innovative software solutions',
      'Comprehensive digital marketing',
      'Robust cybersecurity measures',
      'Focus on renewable energy',
      'User-friendly interface',
    ],
    featured: false,
  },
];

export default projects;

export const featuredProjects = projects.filter((p) => p.featured);
export const totalProjectsCount = projects.length;
export const getProject = (slug) => projects.find((p) => p.slug === slug);
