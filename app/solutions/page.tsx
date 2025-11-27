'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Bot, Code, Cpu, TrendingUp, Cloud, ArrowRight } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations';

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Sparkles,
      title: 'Generative AI Consulting',
      description: 'Transform your business with cutting-edge generative AI solutions. From ChatGPT integrations to custom LLM deployments, we help you harness the power of generative AI.',
      href: '/solutions/generative-ai',
      features: ['Custom GPT Applications', 'RAG Systems', 'Fine-tuning & Prompt Engineering', 'AI Content Generation'],
    },
    {
      icon: Bot,
      title: 'AI Integration Services',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows. We ensure smooth deployment and adoption of AI technologies across your organization.',
      href: '/solutions/ai-integration',
      features: ['API Integration', 'Workflow Automation', 'Legacy System Modernization', 'Change Management'],
    },
    {
      icon: Code,
      title: 'Custom AI Model Development',
      description: 'Build custom AI models designed specifically for your unique business requirements. We develop, train, and deploy models tailored to your data and use cases.',
      href: '/solutions/custom-ai-models',
      features: ['Computer Vision', 'NLP Solutions', 'Predictive Analytics', 'Recommendation Systems'],
    },
    {
      icon: Cpu,
      title: 'MLOps & Model Deployment',
      description: 'Deploy and manage ML models at scale with our expert MLOps solutions. We build robust pipelines for continuous integration, deployment, and monitoring of ML models.',
      href: '/solutions/mlops',
      features: ['CI/CD Pipelines', 'Model Monitoring', 'A/B Testing', 'Performance Optimization'],
    },
    {
      icon: TrendingUp,
      title: 'AI Strategy & Transformation',
      description: 'Develop comprehensive AI strategies that drive business transformation. We help you identify opportunities, prioritize initiatives, and build roadmaps for AI adoption.',
      href: '/solutions/ai-strategy',
      features: ['AI Readiness Assessment', 'Strategy Development', 'Use Case Identification', 'ROI Analysis'],
    },
    {
      icon: Cloud,
      title: 'Cloud Cost Optimization',
      description: 'Reduce cloud infrastructure costs while maintaining performance and reliability. Our experts identify waste, right-size resources, and implement cost-saving measures.',
      href: '/solutions/cloud-optimization',
      features: ['Cost Analysis', 'Resource Optimization', 'Architecture Review', 'FinOps Implementation'],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-spacing bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">Our Solutions</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-muted-foreground font-light">
                Comprehensive AI and cloud services designed to accelerate your digital transformation journey.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-spacing">
        <div className="container">
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
                      <CardTitle className="text-2xl mb-2 font-medium">{solution.title}</CardTitle>
                      <CardDescription className="text-base font-light">{solution.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {solution.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground font-light">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Link href={solution.href}>
                          <Button variant="ghostPrimary" className="w-full">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl mb-6">
                Ready to Get Started?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg mb-10 opacity-90 font-light">
                Let's discuss which solution is right for your business.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Contact Our Team
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
