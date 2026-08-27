import Link from 'next/link';
import { ArrowRight, ExternalLink, Mail, MapPin } from 'lucide-react';
import { projects, skills } from '@/lib/constants';

export function AboutSection({ preview = false }: { preview?: boolean }) {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-20">
        <div>
          <p className="font-mono text-accent text-sm mb-3">A little context</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary text-balance">Design-minded development with a human center.</h2>
        </div>
        <div className="flex flex-col gap-6 text-muted-foreground leading-relaxed">
          <p>I&apos;m Alex, a developer and digital craftsperson based in Portland. I care about the space where useful technology meets thoughtful design.</p>
          <p>I partner with ambitious teams to turn complex ideas into clear, fast, and quietly memorable products. When I&apos;m away from the keyboard, you&apos;ll find me photographing old buildings or making an unreasonable amount of coffee.</p>
          {preview ? <Link href="/about" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">More about me <ArrowRight size={16} /></Link> : null}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="border-y border-border bg-muted py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-accent text-sm mb-8">Tools of the trade</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8">
          {skills.map((skill) => <div key={skill} className="font-semibold text-primary">{skill}</div>)}
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group border border-border bg-card rounded-xl overflow-hidden hover:border-accent transition-colors">
      <div className={`h-48 ${project.id === '1' ? 'bg-primary' : project.id === '2' ? 'bg-accent' : 'bg-muted-foreground'} p-6 flex items-end`}>
        <span className="font-mono text-sm text-primary-foreground/80">{`0${project.id} / ${project.techStack[0]}`}</span>
      </div>
      <div className="p-6 flex flex-col gap-5">
        <div><h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3><p className="text-muted-foreground leading-relaxed">{project.description}</p></div>
        <div className="flex flex-wrap gap-2">{project.techStack.map((item) => <span key={item} className="text-xs font-mono bg-muted text-muted-foreground px-2 py-1 rounded">{item}</span>)}</div>
        <div className="flex items-center gap-4 text-sm font-semibold">
          <a href={project.link} className="inline-flex items-center gap-2 text-accent hover:underline">View project <ExternalLink size={15} /></a>
          <a href={project.link} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary">Code</a>
        </div>
      </div>
    </article>
  );
}

export function ContactForm() {
  return (
    <form className="flex flex-col gap-6" action="mailto:alex@example.com" method="post" encType="text/plain">
      <div className="grid sm:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2"><span className="text-sm font-semibold text-primary">Name</span><input name="name" required className="h-12 rounded-lg border border-input bg-background px-4 outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" /></label>
        <label className="flex flex-col gap-2"><span className="text-sm font-semibold text-primary">Email</span><input type="email" name="email" required className="h-12 rounded-lg border border-input bg-background px-4 outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" /></label>
      </div>
      <label className="flex flex-col gap-2"><span className="text-sm font-semibold text-primary">Message</span><textarea name="message" required rows={6} className="rounded-lg border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring resize-y" placeholder="Tell me a little about your project..." /></label>
      <button type="submit" className="inline-flex items-center justify-center gap-2 self-start rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition">Send message <ArrowRight size={17} /></button>
    </form>
  );
}

export function ContactDetails() {
  return <div className="flex flex-col gap-5 text-muted-foreground"><a href="mailto:alex@example.com" className="inline-flex items-center gap-3 hover:text-accent"><Mail size={19} /> alex@example.com</a><span className="inline-flex items-center gap-3"><MapPin size={19} /> Portland, Oregon</span></div>;
}
