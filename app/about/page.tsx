'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Users, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true }
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We stay at the forefront of AI and cloud technologies to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build long-term partnerships based on trust and results.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect deadlines and deliver projects on time without compromising on quality.'
    },
  ];

  const team = [
    {
      name: 'Leadership Team Member 1',
      role: 'CEO & Founder',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veteran technology leader with 15+ years of experience in AI and cloud computing.'
    },
    {
      name: 'Leadership Team Member 2',
      role: 'CTO',
      bio: 'Experienced technologist specializing in ML/AI infrastructure. Previously led engineering teams at major tech companies.'
    },
    {
      name: 'Leadership Team Member 3',
      role: 'Head of AI Solutions',
      bio: 'PhD in Machine Learning. Expert in deploying enterprise-scale AI solutions across various industries.'
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              About Neblify
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to empower businesses with transformative AI and cloud technologies
              that drive real, measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                To democratize access to advanced AI and cloud technologies, enabling businesses of all
                sizes to innovate, scale, and thrive in the digital era.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that every organization deserves access to world-class AI solutions that
                transform challenges into opportunities for growth.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-4">
                To be the most trusted partner for businesses embarking on their AI transformation journey,
                recognized globally for delivering innovative solutions that create lasting impact.
              </p>
              <p className="text-lg text-muted-foreground">
                We envision a future where AI empowers every business decision, and we're committed to
                making that future a reality.
              </p>
            </motion.div>
          </div>

          {/* Our Values */}
          <div className="mt-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>{value.title}</CardTitle>
                        <CardDescription>{value.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet the experts driving innovation at Neblify
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mx-auto mb-4" />
                    <CardTitle className="text-center">{member.name}</CardTitle>
                    <CardDescription className="text-center font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section id="history" className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground">
                A decade of innovation and growth
              </p>
            </motion.div>

            <div className="space-y-12">
              {[
                {
                  year: '2014',
                  title: 'Foundation',
                  description: 'Neblify was founded with a vision to bridge the gap between cutting-edge AI research and practical business applications.'
                },
                {
                  year: '2017',
                  title: 'Expansion',
                  description: 'Expanded our services to include cloud optimization and DevOps, helping clients scale efficiently.'
                },
                {
                  year: '2020',
                  title: 'AI Innovation',
                  description: 'Launched our Generative AI consulting practice, becoming early adopters and experts in the field.'
                },
                {
                  year: '2024',
                  title: 'Global Recognition',
                  description: 'Recognized as a leading AI solutions provider, serving clients across multiple industries worldwide.'
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-8"
                >
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow pt-2">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-lg mb-8 opacity-90">
              We're always looking for talented individuals who share our passion for AI and innovation.
            </p>
            <Link href="/about/careers">
              <Button size="lg" variant="secondary">
                View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
