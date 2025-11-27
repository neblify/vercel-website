'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Users, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { AvatarPlaceholder } from '@/components/ui/avatar-placeholder';

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
      initials: 'LM',
      role: 'CEO & Founder',
      bio: 'Veteran technology leader with 15+ years of experience in AI and cloud computing.'
    },
    {
      name: 'Leadership Team Member 2',
      initials: 'LM',
      role: 'CTO',
      bio: 'Experienced technologist specializing in ML/AI infrastructure. Previously led engineering teams at major tech companies.'
    },
    {
      name: 'Leadership Team Member 3',
      initials: 'LM',
      role: 'Head of AI Solutions',
      bio: 'PhD in Machine Learning. Expert in deploying enterprise-scale AI solutions across various industries.'
    },
  ];

  const milestones = [
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
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                About Neblify
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-muted-foreground font-light">
                We're on a mission to empower businesses with transformative AI and cloud technologies
                that drive real, measurable results.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="section-spacing">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <Reveal>
              <div>
                <h2 className="text-3xl mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4 font-light">
                  To democratize access to advanced AI and cloud technologies, enabling businesses of all
                  sizes to innovate, scale, and thrive in the digital era.
                </p>
                <p className="text-lg text-muted-foreground font-light">
                  We believe that every organization deserves access to world-class AI solutions that
                  transform challenges into opportunities for growth.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h2 className="text-3xl mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground mb-4 font-light">
                  To be the most trusted partner for businesses embarking on their AI transformation journey,
                  recognized globally for delivering innovative solutions that create lasting impact.
                </p>
                <p className="text-lg text-muted-foreground font-light">
                  We envision a future where AI empowers every business decision, and we're committed to
                  making that future a reality.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Our Values */}
          <div className="mt-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Reveal>
                <h2 className="text-3xl mb-4">Our Values</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg text-muted-foreground font-light">
                  The principles that guide everything we do
                </p>
              </Reveal>
            </div>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <StaggerItem key={index}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="font-medium">{value.title}</CardTitle>
                        <CardDescription className="font-light">{value.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="section-spacing bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl mb-4">Leadership Team</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground font-light">
                Meet the experts driving innovation at Neblify
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <StaggerItem key={index}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <AvatarPlaceholder size="lg" initials={member.initials} />
                    </div>
                    <CardTitle className="text-center font-medium">{member.name}</CardTitle>
                    <CardDescription className="text-center font-medium text-primary">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center font-light">{member.bio}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Company History */}
      <section id="history" className="section-spacing">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <Reveal>
                <h2 className="text-3xl md:text-4xl mb-4">Our Journey</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg text-muted-foreground font-light">
                  A decade of innovation and growth
                </p>
              </Reveal>
            </div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <Reveal key={index} delay={index * 0.1} direction="left">
                  <div className="flex gap-8">
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="flex-grow pt-2">
                      <h3 className="text-xl font-medium mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground font-light">{milestone.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl mb-6">
                Join Our Team
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg mb-10 opacity-90 font-light">
                We're always looking for talented individuals who share our passion for AI and innovation.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/about/careers">
                <Button size="lg" variant="secondary">
                  View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
