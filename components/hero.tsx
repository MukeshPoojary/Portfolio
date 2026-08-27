import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { Navbar } from '@/components/navbar';

export function Hero() {
  return (
    <section className="bg-primary text-primary-foreground py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-accent mb-6">Hello, I&apos;m</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
            Mukesh Poojary
          </h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/80 leading-relaxed mb-8 text-pretty">
            A student developer passionate about creating beautiful, functional web
            applications and solving real-world problems through code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              View my work <ArrowRight size={18} />
            </Link>
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition"
            >
              Download resume <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  const stats = [
    { value: '3+', label: 'Years learning' },
    { value: '12+', label: 'Projects built' },
    { value: '4', label: 'Hackathons joined' },
  ];

  return (
    <section className="border-b border-border bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-primary">{value}</p>
              <p className="text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedWork() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="font-mono text-accent text-sm mb-3">Recent projects</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Student projects</h2>
          </div>
          <Link href="/projects" className="text-accent font-semibold hover:underline inline-flex items-center gap-2">
            View all projects <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="rounded-xl overflow-hidden bg-primary text-primary-foreground min-h-72 flex flex-col justify-between p-8 hover:-translate-y-1 transition-transform">
            <div>
              <p className="font-mono text-accent text-sm mb-4">01 / College</p>
              <h3 className="text-2xl font-bold mb-3">Event Manager</h3>
              <p className="text-primary-foreground/70 leading-relaxed">A platform for managing college events with registration, ticketing, and real-time attendance tracking.</p>
            </div>
            <span className="text-sm text-primary-foreground/60">React · Firebase · Tailwind</span>
          </article>
          <article className="rounded-xl overflow-hidden border border-border bg-card min-h-72 flex flex-col justify-between p-8 hover:-translate-y-1 transition-transform">
            <div>
              <p className="font-mono text-accent text-sm mb-4">02 / Learning</p>
              <h3 className="text-2xl font-bold text-primary mb-3">Student Marketplace</h3>
              <p className="text-muted-foreground leading-relaxed">A peer-to-peer marketplace that helps students find affordable textbooks and study materials.</p>
            </div>
            <span className="text-sm text-muted-foreground">Next.js · MongoDB · TypeScript</span>
          </article>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="bg-accent text-accent-foreground py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold">Want to build something together?</h2>
          <p className="mt-2 opacity-80">I&apos;m always open to collaborating on student projects and new ideas.</p>
        </div>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition self-start sm:self-auto">
          Start a conversation <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between gap-4 text-sm">
        <p>© 2024 Mukesh Poojary. Built with intention.</p>
        <div className="flex gap-5 text-primary-foreground/70">
          <a href="https://github.com" className="hover:text-primary-foreground transition">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-primary-foreground transition">LinkedIn</a>
          <a href="mailto:mukesh.poojary@example.com" className="hover:text-primary-foreground transition">Email</a>
        </div>
      </div>
    </footer>
  );
}

export function SiteHeader() {
  return <Navbar />;
}
