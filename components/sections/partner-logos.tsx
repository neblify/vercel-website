'use client';

import { Reveal } from '@/components/animations';

const partners = [
  { name: 'AWS Partner', placeholder: 'AWS' },
  { name: 'Google Cloud Partner', placeholder: 'GCP' },
  { name: 'Microsoft Azure Partner', placeholder: 'Azure' },
  { name: 'OpenAI Partner', placeholder: 'OpenAI' },
];

export function PartnerLogos() {
  return (
    <section className="py-16 border-y border-border/50 bg-muted/30">
      <div className="container">
        <Reveal>
          <p className="text-center text-sm text-muted-foreground mb-10 uppercase tracking-widest font-medium">
            Trusted Technology Partners
          </p>
        </Reveal>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} delay={index * 0.1}>
              <div className="flex items-center justify-center h-12 px-8 rounded-lg border border-dashed border-muted-foreground/20 bg-background/50">
                <span className="text-sm font-medium text-muted-foreground/50">
                  {partner.placeholder}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
