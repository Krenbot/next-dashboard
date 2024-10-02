import SideNav from '@/app/ui/dashboard/sidenav';
import { Metadata } from 'next';

//Experimental Partial Pre-rendering
export const experimental_ppr = true;

export const metadata: Metadata = {
  icons: {
    icon: '/icon.png',
  },
  title: {
    template: '%s | Arch C&I',
    default: 'Arch Dashboard',
  },
  description: 'Arch C&I - The Energy Experts',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
