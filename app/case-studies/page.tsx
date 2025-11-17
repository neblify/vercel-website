'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground">
              Real-world examples of how we've helped businesses transform with AI and cloud solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mb-2">{study.title}</CardTitle>
                    <CardDescription className="text-base">
                      {study.client} • {study.industry}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Challenge</h4>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how we can help you achieve similar results.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
