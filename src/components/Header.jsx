import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle.jsx';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Journey' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' }
];

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="Angelo Averion, back to top"><span className="brand-mark">A<span>.</span></span><span className="brand-name">ANGELO<br />AVERION</span></a>
        <nav className={`nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation" id="main-nav">
          {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        </nav>
        <div className="header-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a className="header-contact" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
          <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(value => !value)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
    </header>
  );
}
