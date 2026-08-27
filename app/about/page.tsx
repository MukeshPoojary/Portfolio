import { LayoutShell } from '@/components/layout-shell';
import { AboutSection, SkillsSection } from '@/components/portfolio-sections';

export default function AboutPage() {
  return <LayoutShell><section className="bg-primary text-primary-foreground py-20 sm:py-28"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><p className="font-mono text-accent mb-5">About me</p><h1 className="text-5xl sm:text-6xl font-bold text-balance">A developer who notices the details.</h1></div></section><AboutSection /><SkillsSection /></LayoutShell>;
}
