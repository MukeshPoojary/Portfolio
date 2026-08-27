export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  image: string
  link: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with product catalog, shopping cart, and checkout process.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '/projects/ecommerce.jpg',
    link: 'https://example.com/ecommerce',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team collaboration features.',
    techStack: ['Next.js', 'Supabase', 'Tailwind CSS', 'TypeScript'],
    image: '/projects/taskmanager.jpg',
    link: 'https://example.com/tasks',
  },
  {
    id: '3',
    title: 'Analytics Dashboard',
    description: 'Interactive data visualization dashboard for tracking metrics and KPIs in real-time.',
    techStack: ['React', 'D3.js', 'Express', 'MongoDB'],
    image: '/projects/dashboard.jpg',
    link: 'https://example.com/analytics',
  },
]

export const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MongoDB',
  'Supabase',
]

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'Linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'Twitter',
  },
]
