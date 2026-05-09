'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/loi', label: 'Letter of Intent' },
  { href: '/budget', label: 'Budget' },
  { href: '/organization', label: 'Organization' },
  { href: '/timeline', label: 'Timeline' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="nav-links">
      {links.map((link) => {
        const isActive =
          link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={isActive ? 'nav-link active' : 'nav-link'}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
