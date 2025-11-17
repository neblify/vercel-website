'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
            <div className="inline-flex items-center px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm mb-6">
              <Sparkles className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium">Generative AI</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Generative AI Consulting
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your business with cutting-edge generative AI solutions. From ChatGPT integrations
              to custom LLM deployments, we help you harness the power of generative AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline">View Case Studies</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
                >
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Generative AI?</h2>
            <p className="text-lg text-muted-foreground">
              Unlock new possibilities for your business with generative AI
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
            <div className="space-y-8">
              {[
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
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how generative AI can drive innovation and growth for your organization.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
