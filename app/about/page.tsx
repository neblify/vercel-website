'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Users, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { HeroBackground, GradientBlob } from '@/components/decorations';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We stay at the forefront of AI and cloud technologies to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build long-term partnerships based on trust and results.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect deadlines and deliver projects on time without compromising on quality.'
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroBackground variant="about" className="section-spacing overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                About Neblify
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-muted-foreground font-light">
                We're on a mission to empower businesses with transformative AI and cloud technologies
                that drive real, measurable results.
              </p>
            </Reveal>
          </div>
        </div>
      </HeroBackground>

      {/* Mission & Vision */}
      <section id="mission" className="section-spacing">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <Reveal>
              <div>
                <h2 className="text-3xl mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4 font-light">
                  To democratize access to advanced AI and cloud technologies, enabling businesses of all
                  sizes to innovate, scale, and thrive in the digital era.
                </p>
                <p className="text-lg text-muted-foreground font-light">
                  We believe that every organization deserves access to world-class AI solutions that
                  transform challenges into opportunities for growth.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h2 className="text-3xl mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground mb-4 font-light">
                  To be the most trusted partner for businesses embarking on their AI transformation journey,
                  recognized globally for delivering innovative solutions that create lasting impact.
                </p>
                <p className="text-lg text-muted-foreground font-light">
                  We envision a future where AI empowers every business decision, and we're committed to
                  making that future a reality.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Our Values */}
          <div className="mt-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Reveal>
                <h2 className="text-3xl mb-4">Our Values</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg text-muted-foreground font-light">
                  The principles that guide everything we do
                </p>
              </Reveal>
            </div>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <StaggerItem key={index}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="font-medium">{value.title}</CardTitle>
                        <CardDescription className="font-light">{value.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative section-spacing bg-primary text-primary-foreground overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-0 overflow-hidden opacity-20">
          <GradientBlob variant="large" position="top-left" colorScheme="secondary" />
          <GradientBlob variant="medium" position="bottom-right" colorScheme="accent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl mb-6">
                Join Our Team
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg mb-10 opacity-90 font-light">
                We're always looking for talented individuals who share our passion for AI and innovation.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/about/careers">
                <Button size="lg" variant="secondary">
                  View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
