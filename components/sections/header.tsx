'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      href: '/about',
      submenu: [
        { name: 'Mission & Vision', href: '/about#mission' },
        { name: 'Leadership Team', href: '/about#leadership' },
        { name: 'Company History', href: '/about#history' },
        { name: 'Careers', href: '/about/careers' },
      ],
    },
    {
      name: 'Solutions',
      href: '/solutions',
      submenu: [
        { name: 'Generative AI Consulting', href: '/solutions/generative-ai' },
        { name: 'AI Integration Services', href: '/solutions/ai-integration' },
        { name: 'Custom AI Model Development', href: '/solutions/custom-ai-models' },
        { name: 'MLOps & Model Deployment', href: '/solutions/mlops' },
        { name: 'AI Strategy & Transformation', href: '/solutions/ai-strategy' },
      ],
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Resources', href: '/resources' },
    { name: 'Testimonials', href: '/testimonials' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/NeblifyLogo.png"
            alt="Neblify Logo"
            width={180}
            height={60}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="text-foreground/60 transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
              {item.submenu && (
                <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-background border rounded-md shadow-lg">
                  <div className="py-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-foreground/60 hover:text-foreground hover:bg-accent"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA and Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Link href="/contact">
            <Button className="hidden md:inline-flex">Contact Us</Button>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2 text-foreground/60 hover:text-foreground font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block py-1 text-sm text-foreground/60 hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
