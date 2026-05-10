import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'NEO Philanthropy EMOF Application | PolicyEngine',
  description:
    "PolicyEngine's application to the NEO Philanthropy Economic Mobility and Opportunity Fund.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <aside className="sidebar">
            <h2>NEO EMOF 2025</h2>
            <Sidebar />
          </aside>
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
