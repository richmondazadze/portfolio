// Central content/config for the portfolio.
export const site = {
  name: 'Richmond Azadze',
  shortName: 'Richmond',
  roles: ['Software Engineer', 'Full Stack Developer', 'AI Engineer'],
  email: 'richmondazadze1313@gmail.com',
  resume: '/resume.pdf',
  profileImage: '/profile.jpeg',
  experienceStart: '2021-11-06',
  tagline: 'I build full-stack applications and thoughtful AI tools that make everyday tasks simpler.',
  bio: 'I’m a software engineer with a background in Computer Science. I build full-stack applications and integrate AI into practical tools, from air-quality insights and content generation to personal finance.',
  socials: {
    github: 'https://github.com/richmondazadze',
    linkedin: 'https://www.linkedin.com/in/richmond-azadze',
  },
  formEndpoint: 'https://formsubmit.co/richmondazadze1313@gmail.com',
};

export const capabilities = [
  'Full-Stack Development',
  'AI Integration',
  'Front-End Engineering',
  'API Design',
  'Cloud & Serverless',
  'UI Engineering',
];

export const techStack = [
  { icon: '/tech/reactjs.svg', name: 'React' },
  { icon: '/tech/nextjs.svg', name: 'Next.js' },
  { icon: '/tech/nodejs.svg', name: 'Node.js' },
  { icon: '/tech/javascript.svg', name: 'JavaScript' },
  { icon: '/tech/tailwind.svg', name: 'Tailwind' },
  { icon: '/tech/firebase.svg', name: 'Firebase' },
  { icon: '/tech/supabase.svg', name: 'Supabase' },
  { icon: '/tech/openai.svg', name: 'OpenAI' },
  { icon: '/tech/vercel.svg', name: 'Vercel' },
  { icon: '/tech/stripe.svg', name: 'Stripe' },
  { icon: '/tech/html.svg', name: 'HTML' },
  { icon: '/tech/css.svg', name: 'CSS' },
];

/** Whole years of experience since experienceStart. */
export function yearsOfExperience() {
  const [year, month, day] = site.experienceStart.split('-').map(Number);
  const start = new Date(year, month - 1, day);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const beforeAnniversary =
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());
  if (beforeAnniversary) years -= 1;
  return years;
}
