
import { Course, Job, BlogPost, Testimonial, TeamMember } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    name: 'Full Stack Web Development',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
    description: 'Master the MERN stack and build production-ready applications.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Advanced Java Spring Boot',
    category: 'Web Development',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Hibernate'],
    description: 'Enterprise-grade backend development with Java ecosystem.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Search Engine Optimization (SEO)',
    category: 'Digital Marketing',
    technologies: ['Google Analytics', 'Ahrefs', 'SEMrush'],
    description: 'Learn to rank websites at the top of search results.',
    image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Social Media Management',
    category: 'Digital Marketing',
    technologies: ['Meta Ads', 'Content Strategy', 'Copywriting'],
    description: 'Grow brands through strategic social media engagement.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'Modern UI/UX Principles',
    category: 'UI/UX Designing',
    technologies: ['Figma', 'Adobe XD', 'Prototyping'],
    description: 'Design user-centric interfaces that people love to use.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    name: 'Frontend Specialization',
    category: 'Web Development',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Next.js'],
    description: 'Focus on crafting pixel-perfect, responsive user interfaces.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Aditya Kumar',
    designation: 'Chief Executive Officer',
    specialist: 'Cloud Infrastructure Specialist',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Sarah Jennifer',
    designation: 'Technical Director',
    specialist: 'Full Stack Architect',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'Vikram Singh',
    designation: 'Head of Education',
    specialist: 'Data Science & AI Mentor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    name: 'Priya Sharma',
    designation: 'Lead Product Designer',
    specialist: 'UI/UX Strategy Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
  }
];

export const JOBS: Job[] = [
  {
    id: 'j1',
    title: 'Junior React Developer',
    type: 'IT',
    description: 'Build interactive UI components for our global clients.',
    requirements: ['React proficiency', 'Knowledge of REST APIs', 'Team player']
  },
  {
    id: 'j2',
    title: 'Python Backend Engineer',
    type: 'IT',
    description: 'Develop robust data processing pipelines and APIs.',
    requirements: ['Python/Django', 'PostgreSQL knowledge', 'Problem solving']
  },
  {
    id: 'j3',
    title: 'Admissions Counselor',
    type: 'Non-IT',
    description: 'Guide prospective students toward the right career paths.',
    requirements: ['Communication skills', 'Customer empathy', 'Sales background']
  },
  {
    id: 'j4',
    title: 'Digital Marketing Specialist',
    type: 'IT',
    description: 'Manage PPC campaigns and content marketing strategies.',
    requirements: ['Google Ads certification', 'Analytical mindset']
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Future of AI in Web Development',
    excerpt: 'Exploring how LLMs are changing the way we write code and build interfaces.',
    author: 'Aditya Kumar',
    date: 'Oct 24, 2024',
    category: 'Tech Trends',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b2',
    title: 'How to Land Your First IT Job',
    excerpt: 'A comprehensive guide for freshers to navigate the competitive tech market.',
    author: 'Priya Sharma',
    date: 'Oct 20, 2024',
    category: 'Career Advice',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b3',
    title: 'Mastering Figma for Better Collaboration',
    excerpt: 'Tips and tricks to improve your design workflow and team handoff.',
    author: 'Rohan Singh',
    date: 'Oct 15, 2024',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Suresh Raina',
    role: 'Frontend Developer @ TechMahindra',
    content: 'The practical approach at Aditya Skill Gate helped me land my dream job within 3 months of finishing the course.',
    image: 'https://i.pravatar.cc/150?u=suresh'
  },
  {
    id: 't2',
    name: 'Anjali Gupta',
    role: 'UI Designer @ Zomato',
    content: 'Detailed feedback from mentors and live projects made all the difference in building my portfolio.',
    image: 'https://i.pravatar.cc/150?u=anjali'
  }
];

export interface Partner {
  name: string;
  logo: string;
}

export const PARTNERS: Partner[] = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
  { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
  { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
  { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
  { name: 'HCL', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HCL_Technologies_logo.svg' }
];
