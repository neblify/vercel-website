'use client';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations';

export default function GenerativeAIPage() {
  const services = [
    'Custom GPT Application Development',
    'RAG (Retrieval Augmented Generation) Systems',
    'LLM Fine-tuning and Optimization',
    'Prompt Engineering and Optimization',
    'AI Content Generation Pipelines',
    'Chatbot and Virtual Assistant Development',
    'Document Analysis and Summarization',
    'Code Generation and Documentation',
  ];

  const benefits = [
    {
      title: 'Increased Productivity',
      description: 'Automate repetitive tasks and free up your team to focus on high-value work.',
    },
    {
      title: 'Enhanced Customer Experience',
      description: 'Provide 24/7 intelligent support and personalized interactions.',
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through automation and improved efficiency.',
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the curve with cutting-edge AI capabilities.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your business needs, data, and potential use cases for generative AI.',
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive roadmap and technical architecture for your AI solution.',
    },
    {
      step: '03',
      title: 'Development & Training',
      description: 'Our team builds and fine-tunes your AI models, ensuring optimal performance.',
    },
    {
      step: '04',
      title: 'Deployment & Integration',
      description: 'We deploy your AI solution and integrate it seamlessly with your existing systems.',
    },
    {
      step: '05',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring and optimization to ensure sustained value delivery.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-spacing bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm mb-8">
                <Sparkles className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm font-medium">Generative AI</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                Generative AI Consulting
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-muted-foreground mb-10 font-light">
                Transform your business with cutting-edge generative AI solutions. From ChatGPT integrations
                to custom LLM deployments, we help you harness the power of generative AI.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">Get Started</Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="ghostPrimary">View Case Studies</Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <h2 className="text-3xl mb-10">What We Offer</h2>
            </Reveal>
            <StaggerContainer className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start space-x-3 p-4 rounded-xl border border-border/50 bg-card hover:shadow-soft-lg hover:border-border transition-all duration-300">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{service}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-spacing bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl mb-4">Why Generative AI?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground font-light">
                Unlock new possibilities for your business with generative AI
              </p>
            </Reveal>
          </div>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="font-medium">{benefit.title}</CardTitle>
                    <CardDescription className="font-light">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <h2 className="text-3xl mb-12 text-center">Our Process</h2>
            </Reveal>
            <div className="space-y-8">
              {processSteps.map((item, index) => (
                <Reveal key={index} delay={index * 0.1} direction="left">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                      <p className="text-muted-foreground font-light">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl mb-6">
                Ready to Transform Your Business?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg mb-10 opacity-90 font-light">
                Let's discuss how generative AI can drive innovation and growth for your organization.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Schedule a Consultation
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
