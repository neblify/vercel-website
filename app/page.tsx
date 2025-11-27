'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, Cloud, Code, Cpu, LineChart, Shield, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { PartnerLogos } from '@/components/sections/partner-logos';
import { ClientLogos } from '@/components/sections/client-logos';
import { HeroBackground, SectionBackground, SectionDivider, GradientBlob } from '@/components/decorations';

export default function Home() {
  const services = [
    {
      icon: Sparkles,
      title: 'Generative AI Consulting',
      description: 'Transform your business with cutting-edge generative AI solutions tailored to your needs.',
      href: '/solutions/generative-ai'
    },
    {
      icon: Bot,
      title: 'AI Integration Services',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
      href: '/solutions/ai-integration'
    },
    {
      icon: Code,
      title: 'Custom AI Model Development',
      description: 'Build custom AI models designed specifically for your unique business requirements.',
      href: '/solutions/custom-ai-models'
    },
    {
      icon: Cpu,
      title: 'MLOps & Model Deployment',
      description: 'Deploy and manage ML models at scale with our expert MLOps solutions.',
      href: '/solutions/mlops'
    },
    {
      icon: TrendingUp,
      title: 'AI Strategy & Transformation',
      description: 'Develop comprehensive AI strategies that drive business transformation.',
      href: '/solutions/ai-strategy'
    },
    {
      icon: Cloud,
      title: 'Cloud Cost Optimization',
      description: 'Reduce cloud infrastructure costs while maintaining performance and reliability.',
      href: '/solutions/cloud-optimization'
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Your data is protected with industry-leading security practices and compliance standards.'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Get up and running quickly with our streamlined implementation processes.'
    },
    {
      icon: LineChart,
      title: 'Measurable ROI',
      description: 'Track and measure the impact of AI on your business with clear metrics and KPIs.'
    },
  ];

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
    { value: '10+', label: 'Years Experience' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroBackground variant="home" className="section-spacing overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm mb-8">
                <Sparkles className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm font-medium">Transform Your Business with AI</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                AI & Cloud Solutions That
                <span className="text-primary"> Drive Results</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
                Neblify delivers cutting-edge AI, Machine Learning, Generative AI, DevOps, and Cloud cost optimization services to help your business thrive in the digital age.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button size="lg" variant="ghostPrimary" className="w-full sm:w-auto">
                    Explore Solutions
                  </Button>
                </Link>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.4}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-serif text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </HeroBackground>

      {/* Partner Logos */}
      <PartnerLogos />

      {/* Section Divider */}
      <SectionDivider variant="circuit" colorScheme="primary" />

      {/* Services Section */}
      <SectionBackground variant="tech" className="section-spacing bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl mb-4">Our Solutions</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground font-light">
                Comprehensive AI and cloud services designed to accelerate your digital transformation journey.
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={index}>
                  <Link href={service.href}>
                    <Card className="h-full cursor-pointer">
                      <CardHeader>
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-medium">{service.title}</CardTitle>
                        <CardDescription className="font-light">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-primary font-medium">
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </SectionBackground>

      {/* Client Logos */}
      <ClientLogos />

      {/* Section Divider */}
      <SectionDivider variant="dots" colorScheme="primary" />

      {/* Why Choose Us Section */}
      <SectionBackground variant="light" className="section-spacing">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl mb-4">Why Choose Neblify?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground font-light">
                We combine deep technical expertise with a proven track record of delivering results.
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={index} className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground font-light">{feature.description}</p>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </SectionBackground>

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
                Ready to Transform Your Business?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg mb-10 opacity-90 font-light">
                Let's discuss how our AI and cloud solutions can help you achieve your business goals.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Contact Us Today
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
