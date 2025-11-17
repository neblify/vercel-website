'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, Cloud, Code, Cpu, LineChart, Shield, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

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
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="container relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm mb-6">
              <Sparkles className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium">Transform Your Business with AI</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              AI & Cloud Solutions That
              <span className="text-primary"> Drive Results</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Neblify delivers cutting-edge AI, Machine Learning, Generative AI, DevOps, and Cloud cost optimization services to help your business thrive in the digital age.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Solutions
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive AI and cloud services designed to accelerate your digital transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={service.href}>
                    <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer">
                      <CardHeader>
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-primary font-medium">
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Neblify?</h2>
            <p className="text-lg text-muted-foreground">
              We combine deep technical expertise with a proven track record of delivering results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how our AI and cloud solutions can help you achieve your business goals.
            </p>
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
          </div>
        </div>
      </section>
    </div>
  );
}
