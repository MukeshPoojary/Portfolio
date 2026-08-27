import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/hero';

export function LayoutShell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-background"><Navbar /><main>{children}</main><Footer /></div>;
}
