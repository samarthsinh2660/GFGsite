'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0f9d58] text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          GeeksforGeeks Chapter
        </Link>
        <nav className="hidden md:flex space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/team">Team</NavLink>
          <NavLink href="/resources">Resources</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/join">Join Us</NavLink>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#00563f] p-4"
        >
          <NavLink href="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink href="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink href="/events" onClick={() => setIsOpen(false)}>Events</NavLink>
          <NavLink href="/team" onClick={() => setIsOpen(false)}>Team</NavLink>
          <NavLink href="/resources" onClick={() => setIsOpen(false)}>Resources</NavLink>
          <NavLink href="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <NavLink href="/join" onClick={() => setIsOpen(false)}>Join Us</NavLink>
        </motion.nav>
      )}
    </header>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link href={href} className="block py-2 hover:text-[#f1f3f4] transition-colors duration-200" onClick={onClick}>
      {children}
    </Link>
  );
}

