'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Bot, Code, Cpu, TrendingUp, Cloud, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Our Solutions</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive AI and cloud services designed to accelerate your digital transformation journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.1, margin: "200px" }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl mb-2">{solution.title}</CardTitle>
                      <CardDescription className="text-base">{solution.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {solution.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Link href={solution.href}>
                          <Button variant="outline" className="w-full">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss which solution is right for your business.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
