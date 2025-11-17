'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior AI/ML Engineer',
      department: 'Engineering',
      location: 'Mumbai / Remote',
      type: 'Full-time',
      description: "We're looking for an experienced AI/ML engineer to help build and deploy cutting-edge AI solutions for our clients."
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Mumbai / Remote',
      type: 'Full-time',
      description: 'Join our team to build and maintain cloud infrastructure and CI/CD pipelines for AI/ML workloads.'
    },
    {
      title: 'AI Solutions Architect',
      department: 'Consulting',
      location: 'Mumbai / Hybrid',
      type: 'Full-time',
      description: 'Design and architect enterprise AI solutions, working closely with clients to understand their needs.'
    },
  ];

  const benefits = [
    'Competitive salary and equity',
    'Health insurance for you and your family',
    'Flexible work arrangements',
    'Learning & development budget',
    'Latest tech equipment',
    'Team outings and events',
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
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground">
              Build the future of AI with a team that's passionate about innovation and impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Neblify?</h2>
            <p className="text-lg text-muted-foreground">
              We offer more than just a job – we offer a chance to shape the future of AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 rounded-lg border bg-card"
              >
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground">
              Find your next career move with Neblify
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                        <CardDescription>{position.description}</CardDescription>
                      </div>
                      <Link href="/contact">
                        <Button>
                          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {position.type}
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
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See a Fit?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always interested in hearing from talented individuals. Send us your resume and
              let's talk about how you can contribute to Neblify's mission.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
