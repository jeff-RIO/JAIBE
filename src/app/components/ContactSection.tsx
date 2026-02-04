import Image from "next/image";
import { Instagram, MapPin, Phone, ArrowUpRight } from "lucide-react";

import florCacau from "../assets/flordecacau.png";
import { StreetCardYellow } from "../components/StreetCardYellow";
import FlashPoster from "./flash";

const ContactSection = () => {
  return (
    <section
      id="contato"
      className="py-20 md:py-28 bg-card relative overflow-hidden texture-noise"
    >
      {/* Street decals (mais calêndula) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.09]">
        <div className="absolute -left-24 top-16 w-[420px] h-[420px] border-2 border-primary rotate-6" />
        <div className="absolute right-10 bottom-10 w-[280px] h-[280px] border-2 border-primary -rotate-12" />
      </div>

      {/* Accent line */}
      <div className="absolute bottom-0 right-1/4 w-px h-44 bg-gradient-to-t from-primary to-transparent" />

      {/* Decorative background flower */}
      <div className="absolute -right-24 top-6 opacity-20 rotate-12 pointer-events-none select-none">
        <Image src={florCacau} alt="" width={420} height={420} aria-hidden />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="flex items-center gap-3 mb-5 justify-center lg:justify-start">
              <div className="w-10 h-[2px] bg-primary" />
              <span className="font-display text-primary text-lg tracking-[0.35em] uppercase">
                Contato
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl text-foreground leading-[0.9]">
              VAMOS CRIAR
              <br />
              <span className="text-primary drop-shadow-sm">JUNTOS?</span>
            </h2>

            <p className="font-body text-foreground/75 mt-6 mb-8 text-base md:text-[17px] leading-relaxed">
              Me chama pra agendar sua sessão ou trocar uma ideia sobre sua
              arte.
              <span className="text-foreground/95">
                {" "}
                Direto, simples e real.
              </span>
            </p>

            {/* CTA (agora com o ícone dentro, centraliza certo no mobile) */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="https://wa.me/552124955245?text=Oi!%20Quero%20agendar%20uma%20sess%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 border-2 border-primary/70
                           bg-primary/20 text-foreground transition-all
                           shadow-[6px_6px_0_0_hsl(var(--foreground)/0.9)]
                           hover:bg-primary/28 hover:border-primary
                           hover:translate-x-[1px] hover:translate-y-[1px]
                           active:translate-x-[3px] active:translate-y-[3px]
                           active:shadow-[3px_3px_0_0_hsl(var(--foreground)/0.9)]
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
              >
                <span className="font-display tracking-[0.22em]">
                  CHAMAR NO WHATSAPP
                </span>
                <ArrowUpRight size={18} className="text-primary" />
              </a>
            </div>

            {/* Cards (centralizados e com largura consistente no mobile) */}
            <div className="mt-8 grid gap-4 w-full max-w-[520px] mx-auto lg:mx-0">
              <StreetCardYellow
                href="https://wa.me/552124955245?text=Oi!%20Quero%20agendar%20uma%20sess%C3%A3o."
                title="WHATSAPP"
                value="(21) 2495-5245"
                icon={<Phone size={18} className="text-primary" />}
                external
              />

              <StreetCardYellow
                href="https://www.instagram.com/jaibetattoo/"
                title="INSTAGRAM"
                value="@jaibetattoo"
                icon={<Instagram size={18} className="text-primary" />}
                external
              />

              {/* Location (non-link) */}
              <div className="relative border-2 border-border bg-primary/10 p-4 shadow-[8px_8px_0_0_hsl(var(--foreground)/0.9)]">
                <div className="absolute -top-3 left-6 w-20 h-6 bg-primary/35 border-2 border-primary/70 rotate-[-6deg]" />
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-secondary border-2 border-primary/50 flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div className="leading-tight">
                    <p className="font-display text-[11px] text-muted-foreground tracking-[0.25em]">
                      ESTÚDIO
                    </p>
                    <p className="font-body text-sm text-foreground/95">
                      Rio de Janeiro,RJ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - poster com glow calêndula */}
          <div className="relative flex items-start justify-center lg:justify-end">
            <div className="pointer-events-none absolute -inset-10 bg-primary/20 blur-3xl opacity-70" />

            <a
              href="#portfolio"
              className="group relative w-full max-w-[520px] mx-auto lg:mx-0
               border-2 border-primary/60 bg-background p-6 md:p-8
               shadow-[10px_10px_0_0_hsl(var(--foreground)/0.9)]
               transition-transform hover:-translate-y-1
               hover:border-primary"
              aria-label="Ver flashes e portfólio"
            >
              {/* tape corners (calêndula) */}
              <div className="absolute -top-3 left-8 w-24 h-7 bg-primary/35 border-2 border-primary/70 rotate-[10deg]" />
              <div className="absolute -top-3 right-10 w-20 h-7 bg-primary/35 border-2 border-primary/70 rotate-[-8deg]" />

              {/* Header do card (no mobile vira coluna pra não ficar “esticado”) */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6 mb-4">
                <p className="font-display text-[11px] md:text-xs uppercase tracking-[0.28em] text-foreground/70">
                  <span
                    className="inline-flex items-center gap-2 border-2 border-primary/70 bg-primary/15 px-5 py-2.5
                               text-base md:text-lg
                               shadow-[8px_8px_0_0_hsl(var(--foreground)/0.9)]
                               -rotate-1"
                  >
                    FLASH
                  </span>
                </p>

                <span className="font-display text-xs text-primary tracking-[0.25em] inline-flex items-center gap-2">
                  VER TRABALHOS <ArrowUpRight size={14} />
                </span>
              </div>

              <FlashPoster className="transition-transform duration-500 md:group-hover:rotate-3 md:group-hover:scale-[1.03]" />

              <div className="mt-5">
                <h3 className="font-display text-2xl md:text-3xl uppercase tracking-[0.08em] text-foreground leading-none">
                  <span className="text-primary drop-shadow-sm">
                    DISPONÍVEIS
                  </span>
                </h3>

                <p className="font-body text-sm text-foreground/75 mt-2 leading-relaxed">
                  Escolhe um flash que combina contigo — depois bora ajustar do
                  seu jeito. Clique pra ver mais no portfólio.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
