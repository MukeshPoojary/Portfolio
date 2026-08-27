import { LayoutShell } from '@/components/layout-shell';
import { ContactDetails, ContactForm } from '@/components/portfolio-sections';

export default function ContactPage() {
  return <LayoutShell><section className="bg-primary text-primary-foreground py-20 sm:py-28"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><p className="font-mono text-accent mb-5">Get in touch</p><h1 className="text-5xl sm:text-6xl font-bold text-balance">Let&apos;s make something useful.</h1></div></section><section className="bg-background py-16 sm:py-24"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-24"><div className="flex flex-col gap-6"><h2 className="text-3xl font-bold text-primary">Start a conversation</h2><p className="text-muted-foreground leading-relaxed">Have a project, an idea, or just want to say hello? Send a note and I&apos;ll get back to you soon.</p><ContactDetails /></div><ContactForm /></div></section></LayoutShell>;
}
