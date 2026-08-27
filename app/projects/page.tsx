import { LayoutShell } from '@/components/layout-shell';
import { ProjectCard } from '@/components/portfolio-sections';
import { projects } from '@/lib/constants';

export default function ProjectsPage() {
  return <LayoutShell><section className="bg-primary text-primary-foreground py-20 sm:py-28"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><p className="font-mono text-accent mb-5">Selected work</p><h1 className="text-5xl sm:text-6xl font-bold text-balance">A few things I&apos;ve made.</h1></div></section><section className="bg-background py-16 sm:py-24"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div></section></LayoutShell>;
}
