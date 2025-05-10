'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[var(--static-background-strong)] border-b border-[var(--static-divider-standard)]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center no-underline">
            <Logo />
          </a>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-[var(--static-text-standard)] hover:text-[var(--static-text-strong)] no-underline">
            Features
          </Link>
          <Link href="#pricing" className="text-[var(--static-text-standard)] hover:text-[var(--static-text-strong)] no-underline">
            Pricing
          </Link>
          <Link href="#demo" className="text-[var(--static-text-standard)] hover:text-[var(--static-text-strong)] no-underline">
            Demo
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-[var(--static-text-standard)] hover:text-[var(--static-text-strong)] no-underline">
              Log in
            </Link>
            <Button className="btn-primary btn-md">Start Free Trial</Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            className="text-[var(--static-text-standard)] p-2"
            onClick={toggleMobileMenu}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="h-6 w-6"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--static-background-strong)] border-t border-[var(--static-divider-standard)] px-4 py-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link
              href="#features" 
              className="text-[var(--static-text-standard)] hover:text-[var(--static-text-strong)] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              className="text-[var(--static-text-standard)] hover:text-[var(--static-text-strong)] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#demo" 
              className="text-[var(--static-text-standard)] hover:text-[var(--static-text-strong)] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Demo
            </Link>
            <Link 
              href="/login" 
              className="text-[var(--static-text-standard)] hover:text-[var(--static-text-strong)] py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log in
            </Link>
            <Button className="btn-primary w-full">Start Free Trial</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
