'use client';

import { Reveal } from '@/components/animations';

const clients = [
  'Enterprise Client 1',
  'Enterprise Client 2',
  'Enterprise Client 3',
  'Enterprise Client 4',
  'Enterprise Client 5',
  'Enterprise Client 6',
];

export function ClientLogos() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <Reveal>
          <p className="text-center text-sm text-muted-foreground mb-10 uppercase tracking-widest font-medium">
            Trusted by Industry Leaders
          </p>
        </Reveal>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {clients.map((client, index) => (
            <Reveal key={client} delay={index * 0.05}>
              <div className="flex items-center justify-center h-10 w-28 md:w-32 rounded border border-dashed border-muted-foreground/20 bg-muted/30">
                <span className="text-xs text-muted-foreground/40">Logo</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
