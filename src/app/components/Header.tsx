"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import Image from "next/image";
import tattooMachine from "../assets/logo.png";

const WHATSAPP_LINK =
  "https://wa.me/552124955245?text=Oi!%20Quero%20agendar%20uma%20sess%C3%A3o.";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-sm border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src={tattooMachine}
            alt="Jaire Logo"
            width={100}
            height={100}
            className="object-contain transition-transform group-hover:rotate-12"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/70 hover:text-primary transition-colors duration-200 font-display text-lg tracking-wider relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}

          {/* ZAP */}
          <Button variant="hero" size="default" asChild>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chamar no WhatsApp"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle size={18} />
              <span className="font-display tracking-[0.22em]">ZAP</span>
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? (
            <X size={28} strokeWidth={2.5} />
          ) : (
            <Menu size={28} strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/70 hover:text-primary transition-colors duration-200 font-display text-xl tracking-wider py-2 border-b border-border"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* ZAP (mobile) */}
          <Button variant="hero" size="lg" className="mt-4" asChild>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chamar no WhatsApp"
              className="inline-flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageCircle size={20} />
              <span className="font-display tracking-[0.22em]">
                CHAMAR NO ZAP
              </span>
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
