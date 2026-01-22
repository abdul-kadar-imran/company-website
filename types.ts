
export interface Course {
  id: string;
  name: string;
  category: 'Web Development' | 'Digital Marketing' | 'UI/UX Designing';
  technologies: string[];
  description: string;
  image: string;
}

export interface Job {
  id: string;
  title: string;
  type: 'IT' | 'Non-IT';
  description: string;
  requirements: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  specialist: string;
  image: string;
}
