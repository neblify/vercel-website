'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Bot, Sparkles, Cpu } from 'lucide-react';
import Link from 'next/link';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { HeroBackground, SectionDivider, GradientBlob } from '@/components/decorations';

export default function SamplesPage() {
  const samples = [
    {
      icon: Sparkles,
      title: 'Generative AI Sample',
      description: 'Explore our generative AI implementations including ChatGPT integrations, custom GPT applications, and RAG systems.',
      category: 'Generative AI',
      tags: ['GPT', 'LLM', 'RAG'],
    },
    {
      icon: Bot,
      title: 'AI Integration Sample',
      description: 'See how we integrate AI capabilities into existing systems with seamless API connections and workflow automation.',
      category: 'AI Integration',
      tags: ['API', 'Automation', 'Integration'],
    },
    {
      icon: Code,
      title: 'Custom Model Sample',
      description: 'Discover custom AI models we\'ve developed for computer vision, NLP, and predictive analytics use cases.',
      category: 'Custom AI',
      tags: ['Computer Vision', 'NLP', 'ML'],
    },
    {
      icon: Cpu,
      title: 'MLOps Pipeline Sample',
      description: 'Review our MLOps implementations featuring CI/CD pipelines, model monitoring, and deployment strategies.',
      category: 'MLOps',
      tags: ['CI/CD', 'Monitoring', 'Deployment'],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <HeroBackground variant="default" className="section-spacing overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                Samples
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-muted-foreground font-light">
                Explore our portfolio of AI and cloud solutions. See real examples of our work across various industries and use cases.
              </p>
            </Reveal>
          </div>
        </div>
      </HeroBackground>

      {/* Section Divider */}
      <SectionDivider variant="circuit" colorScheme="primary" />

      {/* Samples Grid */}
      <section className="section-spacing">
        <div className="container">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {samples.map((sample, index) => {
              const Icon = sample.icon;
              return (
                <StaggerItem key={index}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {sample.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <CardTitle className="text-2xl mb-2 font-medium">{sample.title}</CardTitle>
                      <CardDescription className="text-base font-light">
                        {sample.category}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-6 font-light">
                        {sample.description}
                      </p>
                      <Link href="/contact">
                        <Button variant="ghostPrimary" className="w-full">
                          Request Access <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
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
                Interested in Seeing More?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg mb-10 opacity-90 font-light">
                Contact us to access detailed samples and discuss how we can help with your specific requirements.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

