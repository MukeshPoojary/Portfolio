import { LayoutShell } from '@/components/layout-shell';
import { Hero, Stats, FeaturedWork, CTA } from '@/components/hero';
import { AboutSection, SkillsSection } from '@/components/portfolio-sections';

export default function Home() {
  return <LayoutShell><Hero /><Stats /><AboutSection preview /><FeaturedWork /><SkillsSection /><CTA /></LayoutShell>;
}
