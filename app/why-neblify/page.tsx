'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Check, 
  Target, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  ArrowRight,
  Building2,
  ShoppingCart,
  Heart,
  GraduationCap,
  Sprout,
  Briefcase,
  Lightbulb,
  Code,
  MessageSquare,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { HeroBackground, SectionBackground, SectionDivider, GradientBlob } from '@/components/decorations';

export default function WhyNeblifyPage() {
  const challenges = [
    {
      icon: Target,
      title: 'Stalled AI Initiatives',
      description: 'Many organizations struggle with AI projects that fail to progress beyond the pilot stage, lacking clear execution strategies and measurable outcomes.',
    },
    {
      icon: Zap,
      title: 'Unclear Implementation Paths',
      description: 'Without proper guidance, businesses find it difficult to determine the right AI technologies, architectures, and integration approaches for their specific needs.',
    },
    {
      icon: TrendingUp,
      title: 'Scalability Concerns',
      description: 'Initial AI solutions often work in isolated environments but fail to scale across the organization, limiting their overall business impact.',
    },
  ];

  const solutions = [
    {
      icon: Lightbulb,
      title: 'Strategic Guidance',
      description: 'We help you navigate the complex AI landscape, selecting the most appropriate strategies and architectures that align with your business objectives.',
    },
    {
      icon: Zap,
      title: 'Accelerated Implementation',
      description: 'Leverage our proven methodologies and best practices to move from concept to production-ready solutions faster, delivering tangible value sooner.',
    },
    {
      icon: Target,
      title: 'Business Alignment',
      description: 'Every AI initiative is designed to directly support your organizational goals, ensuring technology investments translate into measurable business outcomes.',
    },
    {
      icon: Users,
      title: 'Team Empowerment',
      description: 'We build internal capabilities within your organization, enabling your teams to sustain and evolve AI solutions independently over time.',
    },
  ];

  const services = [
    {
      icon: BarChart3,
      title: 'Strategy & Discovery',
      description: 'Comprehensive AI readiness assessments and tailored roadmaps that identify opportunities and prioritize initiatives for maximum impact.',
    },
    {
      icon: Code,
      title: 'AI Application Development',
      description: 'Design and deploy intelligent systems that integrate seamlessly with your existing infrastructure, delivering production-ready solutions.',
    },
    {
      icon: MessageSquare,
      title: 'Conversational Systems',
      description: 'Build advanced chatbots and conversational interfaces that enhance customer engagement and streamline internal communications.',
    },
  ];

  const industries = [
    {
      icon: Building2,
      title: 'Real Estate & Infrastructure',
      description: 'Enhancing customer engagement, streamlining sales processes, and optimizing property management operations.',
    },
    {
      icon: Shield,
      title: 'Insurance',
      description: 'Modernizing operational workflows, improving compliance processes, and accelerating claims processing.',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce & Retail',
      description: 'Personalizing customer interactions, optimizing product recommendations, and improving overall engagement.',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Enhancing patient support systems, improving clinical decision-making, and streamlining administrative processes.',
    },
    {
      icon: GraduationCap,
      title: 'Education Technology',
      description: 'Supporting student engagement, facilitating personalized learning experiences, and optimizing institutional operations.',
    },
    {
      icon: Sprout,
      title: 'Agriculture',
      description: 'Delivering advisory services, providing decision support tools, and optimizing operations in distributed agricultural environments.',
    },
  ];

  const methodology = [
    {
      step: '01',
      title: 'Assessing Readiness',
      description: 'We evaluate your data assets, existing systems, and operational workflows to identify high-value AI opportunities and potential challenges.',
    },
    {
      step: '02',
      title: 'Defining the Path Forward',
      description: 'Prioritize use cases and sequence initiatives to deliver measurable outcomes, ensuring each step builds upon previous successes.',
    },
    {
      step: '03',
      title: 'Designing for Trust & Control',
      description: 'Embed governance frameworks and compliance measures from the start, ensuring AI systems operate within defined boundaries and ethical guidelines.',
    },
    {
      step: '04',
      title: 'Building & Integrating',
      description: 'Develop production-ready AI systems that integrate smoothly with your existing technology stack and business processes.',
    },
    {
      step: '05',
      title: 'Scaling & Optimizing',
      description: 'Enhance performance and cost efficiency as usage grows, ensuring your AI solutions remain effective and economical at scale.',
    },
    {
      step: '06',
      title: 'Continuous Optimization',
      description: 'Monitor performance metrics, gather feedback, and iterate continuously to maximize return on investment and adapt to changing needs.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroBackground variant="default" className="section-spacing overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                Why Choose Neblify?
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-muted-foreground font-light">
                We transform AI ambitions into operational reality. Our proven approach helps organizations 
                overcome implementation barriers and achieve sustainable AI success.
              </p>
            </Reveal>
          </div>
        </div>
      </HeroBackground>

      {/* Section Divider */}
      <SectionDivider variant="circuit" colorScheme="primary" />

      {/* Challenges Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl mb-4">Common AI Implementation Challenges</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground font-light">
                Many organizations face significant obstacles when attempting to integrate AI into their operations
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <StaggerItem key={index}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-medium">{challenge.title}</CardTitle>
                      <CardDescription className="font-light">{challenge.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="wave" colorScheme="primary" />

      {/* Solutions Section */}
      <SectionBackground variant="tech" className="section-spacing bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl mb-4">How Neblify Addresses These Challenges</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground font-light">
                Our comprehensive approach ensures your AI initiatives deliver real, measurable value
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <StaggerItem key={index}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-medium">{solution.title}</CardTitle>
                      <CardDescription className="font-light">{solution.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </SectionBackground>

      {/* Section Divider */}
      <SectionDivider variant="dots" colorScheme="primary" />

      {/* Services Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl mb-4">Our Service Offerings</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground font-light">
                Structured services designed to guide you through every stage of your AI journey
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={index}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-medium">{service.title}</CardTitle>
                      <CardDescription className="font-light">{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="circuit" colorScheme="primary" />

      {/* Industries Section */}
      <SectionBackground variant="light" className="section-spacing bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl mb-4">Industry Expertise</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground font-light">
                We bring deep domain knowledge across multiple sectors, enabling us to deliver 
                industry-specific AI solutions that drive meaningful results
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <StaggerItem key={index}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-medium">{industry.title}</CardTitle>
                      <CardDescription className="font-light text-sm">{industry.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </SectionBackground>

      {/* Section Divider */}
      <SectionDivider variant="wave" colorScheme="primary" />

      {/* Methodology Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <Reveal>
                <h2 className="text-3xl md:text-4xl mb-4">Our Execution Methodology</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg text-muted-foreground font-light">
                  A disciplined, proven approach that transforms AI concepts into operational excellence
                </p>
              </Reveal>
            </div>

            <div className="space-y-8">
              {methodology.map((item, index) => (
                <Reveal key={index} delay={index * 0.1} direction="left">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-grow pt-2">
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

      {/* Section Divider */}
      <SectionDivider variant="dots" colorScheme="primary" />

      {/* Platform Section */}
      <SectionBackground variant="tech" className="section-spacing bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm mb-6">
                  <Briefcase className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm font-medium">Proprietary Platform</span>
                </div>
                <h2 className="text-3xl md:text-4xl mb-4">Streamlined AI Development Platform</h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground text-center font-light mb-8">
                Neblify's proprietary platform simplifies the development and management of AI agents 
                across multiple channels. Our technology enables you to operationalize AI solutions 
                without increasing complexity, providing a unified framework for building, deploying, 
                and scaling intelligent systems.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-4 rounded-xl border border-border/50 bg-card">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Unified Development Environment</span>
                </div>
                <div className="flex items-start space-x-3 p-4 rounded-xl border border-border/50 bg-card">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Multi-Channel Deployment</span>
                </div>
                <div className="flex items-start space-x-3 p-4 rounded-xl border border-border/50 bg-card">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Simplified Management</span>
                </div>
                <div className="flex items-start space-x-3 p-4 rounded-xl border border-border/50 bg-card">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Reduced Operational Complexity</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionBackground>

      {/* CTA Section */}
      <section className="relative section-spacing bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 -z-0 overflow-hidden opacity-20">
          <GradientBlob variant="large" position="top-left" colorScheme="secondary" />
          <GradientBlob variant="medium" position="bottom-right" colorScheme="accent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl mb-6">
                Ready to Transform Your AI Initiatives?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg mb-10 opacity-90 font-light">
                Let's discuss how Neblify can help you overcome implementation challenges and 
                achieve sustainable AI success.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
