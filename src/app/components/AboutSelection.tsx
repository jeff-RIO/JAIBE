import artistPortrait from "@/assets/artist-portrait.png";
import florMaracuja from "@/assets/flor-maracuja.png";

const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="py-20 md:py-28 bg-card relative overflow-hidden texture-noise"
    >
      {/* Accent line */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-primary to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden card-elevated border-2 border-border"></div>

            {/* Street-style frame */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-primary -z-10" />
            <div className="absolute top-4 left-4 font-display text-6xl text-primary/20 -z-10">
              ★
            </div>

            {/* Flor “assinatura” */}
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-primary" />
              <span className="font-display text-primary text-lg tracking-[0.3em] uppercase">
                Sobre
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6 leading-none">
              ARTE QUE NASCE
              <br />
              <span className="text-primary">DA PELE</span>
            </h2>

            {/* Micro-sections */}
            <div className="space-y-6 text-foreground/75 font-body leading-relaxed text-base">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center font-display text-xs tracking-[0.35em] uppercase text-primary">
                    Quem é a Jaibe
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <p>
                  Oi, prazer, sou a Jaibe. Sou tatuadora desde 2016, artista
                  plástica e formada em licenciatura em Belas Artes pela UFRRJ.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center font-display text-xs tracking-[0.35em] uppercase text-primary">
                    Por que tatuar
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <p>
                  Acredito no poder da arte e na transformação que uma tatuagem
                  pode ter na autoestima e na busca pessoal de cada pessoa.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center font-display text-xs tracking-[0.35em] uppercase text-primary">
                    Como nasce um projeto
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <p>
                  A base de qualquer projeto meu é a conversa e a troca. Ouvir
                  com atenção, trocar ideias, sugerir caminhos e possíveis
                  junções faz parte do início de tudo.
                </p>
                <p>
                  A tatuagem nasce desse encontro de ideias e ideais, da
                  confiança e da real intenção de ouvir, interpretar e só então
                  criar, em conjunto.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center font-display text-xs tracking-[0.35em] uppercase text-primary">
                    Além da pele
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <p>
                  Além da tatuagem, também produzo arte em materiais e formatos
                  diversos, sempre entendendo a arte como um espaço de
                  expressão, investigação e atravessamento.
                </p>
              </div>

              {/* Manifesto */}
              <blockquote className="mt-2 border-l-2 border-primary pl-4 py-1 text-foreground font-display text-lg md:text-xl leading-snug">
                “Ouvir, interpretar e criar junto.”
              </blockquote>

              {/* Processo - mini timeline */}
              <div className="mt-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-1 bg-primary" />
                  <span className="font-display text-primary text-sm tracking-[0.3em] uppercase">
                    Processo
                  </span>
                </div>

                <ol className="grid sm:grid-cols-2 gap-3">
                  {[
                    {
                      step: "01",
                      title: "Conversa / briefing",
                      desc: "Entendo sua ideia, referências e intenção.",
                    },
                    {
                      step: "02",
                      title: "Referências e ideias",
                      desc: "Alinhamos estilo, composição e possibilidades.",
                    },
                    {
                      step: "03",
                      title: "Desenho em conjunto",
                      desc: "Eu interpreto e ajusto com você até ficar perfeito.",
                    },
                    {
                      step: "04",
                      title: "Sessão + cuidados",
                      desc: "Tatuo com técnica e te guio no pós.",
                    },
                  ].map((item) => (
                    <li
                      key={item.step}
                      className="relative border border-border rounded-2xl p-4 bg-card/60 card-elevated"
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-display text-primary text-sm tracking-[0.35em]">
                          {item.step}
                        </span>
                        <div>
                          <p className="font-display text-foreground">
                            {item.title}
                          </p>
                          <p className="text-foreground/70 text-sm mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Stats (ajustado p/ 2 colunas pra não sobrar espaço) */}
            {/* Stats (centralizado) */}
            <div className="mt-10 pt-8 border-t border-border flex justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="text-center">
                  <span className="font-display text-3xl md:text-4xl text-primary block">
                    2016
                  </span>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    Início na tattoo
                  </p>
                </div>

                <div className="text-center border-l border-border">
                  <span className="font-display text-3xl md:text-4xl text-primary block">
                    500+
                  </span>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    Tatuagens autorais
                  </p>
                </div>
              </div>
            </div>

            {/* CTA (centralizado) */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-display bg-primary text-primary-foreground hover:opacity-90 transition"
              >
                Quero conversar sobre minha ideia
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-display border border-border text-foreground hover:bg-foreground/5 transition"
              >
                Ver portfólio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
