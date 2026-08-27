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
            Alex Morgan
          </h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/80 leading-relaxed mb-8 text-pretty">
            A creative developer who builds exceptional digital experiences with
            code, design, and a little bit of magic.
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
    { value: '5+', label: 'Years experience' },
    { value: '50+', label: 'Projects shipped' },
    { value: '20+', label: 'Happy clients' },
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
            <p className="font-mono text-accent text-sm mb-3">Selected work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Things I&apos;ve built</h2>
          </div>
          <Link href="/projects" className="text-accent font-semibold hover:underline inline-flex items-center gap-2">
            View all projects <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="rounded-xl overflow-hidden bg-primary text-primary-foreground min-h-72 flex flex-col justify-between p-8 hover:-translate-y-1 transition-transform">
            <div>
              <p className="font-mono text-accent text-sm mb-4">01 / Product</p>
              <h3 className="text-2xl font-bold mb-3">Pulse Analytics</h3>
              <p className="text-primary-foreground/70 leading-relaxed">A real-time data dashboard that helps teams find the signal in their metrics.</p>
            </div>
            <span className="text-sm text-primary-foreground/60">Next.js · TypeScript · Postgres</span>
          </article>
          <article className="rounded-xl overflow-hidden border border-border bg-card min-h-72 flex flex-col justify-between p-8 hover:-translate-y-1 transition-transform">
            <div>
              <p className="font-mono text-accent text-sm mb-4">02 / Brand</p>
              <h3 className="text-2xl font-bold text-primary mb-3">Studio North</h3>
              <p className="text-muted-foreground leading-relaxed">A digital home for an independent design studio with a bold point of view.</p>
            </div>
            <span className="text-sm text-muted-foreground">React · Framer Motion · CMS</span>
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
          <h2 className="text-2xl font-bold">Have a project in mind?</h2>
          <p className="mt-2 opacity-80">Let&apos;s make something meaningful together.</p>
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
        <p>© 2024 Alex Morgan. Built with intention.</p>
        <div className="flex gap-5 text-primary-foreground/70">
          <a href="https://github.com" className="hover:text-primary-foreground transition">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-primary-foreground transition">LinkedIn</a>
          <a href="mailto:alex@example.com" className="hover:text-primary-foreground transition">Email</a>
        </div>
      </div>
    </footer>
  );
}

export function SiteHeader() {
  return <Navbar />;
}
