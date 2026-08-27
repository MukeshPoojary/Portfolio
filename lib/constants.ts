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
    title: 'College Event Management System',
    description: 'A web application for managing college events with registration, ticketing, and attendee tracking built during my second year.',
    techStack: ['React', 'Firebase', 'Tailwind CSS', 'JavaScript'],
    image: '/projects/events.jpg',
    link: 'https://github.com/mukeshpoojary/event-manager',
  },
  {
    id: '2',
    title: 'Student Marketplace Platform',
    description: 'Peer-to-peer marketplace for students to buy and sell textbooks and study materials with real-time messaging.',
    techStack: ['Next.js', 'MongoDB', 'Node.js', 'TypeScript'],
    image: '/projects/marketplace.jpg',
    link: 'https://github.com/mukeshpoojary/student-marketplace',
  },
  {
    id: '3',
    title: 'University Course Finder',
    description: 'Interactive tool for exploring course offerings with filters, ratings, and personalized recommendations for students.',
    techStack: ['React', 'API Integration', 'Tailwind CSS', 'Express'],
    image: '/projects/coursefinder.jpg',
    link: 'https://github.com/mukeshpoojary/course-finder',
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
  'Python',
  'Git & GitHub',
  'Figma',
  'Problem Solving',
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
