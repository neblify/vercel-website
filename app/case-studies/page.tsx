'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { HeroBackground, SectionDivider, GradientBlob } from '@/components/decorations';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'E-commerce AI Chatbot Implementation',
      client: 'Leading Online Retailer',
      industry: 'E-commerce',
      solution: 'AI Integration Services',
      challenge: 'High customer service costs and slow response times',
      results: ['70% reduction in support costs', '24/7 customer support', '95% customer satisfaction'],
      tags: ['Generative AI', 'Chatbot', 'Customer Service'],
    },
    {
      title: 'Predictive Maintenance System',
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      solution: 'Custom AI Model Development',
      challenge: 'Unexpected equipment failures causing production delays',
      results: ['40% reduction in downtime', '$2M annual savings', 'Predictive accuracy of 92%'],
      tags: ['Machine Learning', 'Predictive Analytics', 'IoT'],
    },
    {
      title: 'Cloud Cost Optimization',
      client: 'SaaS Startup',
      industry: 'Technology',
      solution: 'Cloud Optimization',
      challenge: 'Rapidly increasing cloud infrastructure costs',
      results: ['50% cost reduction', 'Improved performance', 'Automated scaling'],
      tags: ['Cloud', 'Cost Optimization', 'DevOps'],
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
                Case Studies
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-muted-foreground font-light">
                Real-world examples of how we've helped businesses transform with AI and cloud solutions.
              </p>
            </Reveal>
          </div>
        </div>
      </HeroBackground>

      {/* Section Divider */}
      <SectionDivider variant="circuit" colorScheme="primary" />

      {/* Case Studies */}
      <section className="section-spacing">
        <div className="container">
          <StaggerContainer className="space-y-12">
            {caseStudies.map((study, index) => (
              <StaggerItem key={index}>
                <Card>
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mb-2 font-medium">{study.title}</CardTitle>
                    <CardDescription className="text-base font-light">
                      {study.client} • {study.industry}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <h4 className="font-medium mb-2">Challenge</h4>
                        <p className="text-sm text-muted-foreground font-light">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground font-light">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground font-light">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
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
                Ready to Write Your Success Story?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg mb-10 opacity-90 font-light">
                Let's discuss how we can help you achieve similar results.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
