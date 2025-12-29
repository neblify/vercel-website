'use client';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { HeroBackground, SectionDivider, GradientBlob } from '@/components/decorations';

export default function SamplesPage() {
  const videos = [
    {
      title: 'Generative AI Implementation',
      videoUrl: 'https://www.youtube.com/embed/VDv-ljaTMmM',
    },
    {
      title: 'AI Integration Services',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
    },
    {
      title: 'Custom AI Model Development',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
    },
    {
      title: 'MLOps Pipeline Overview',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
    },
    {
      title: 'Cloud Optimization Strategies',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
    },
    {
      title: 'DevOps Best Practices',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
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
                Samples
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-muted-foreground font-light">
                Watch our video library showcasing AI and cloud solutions. See real examples of our work across various industries and use cases.
              </p>
            </Reveal>
          </div>
        </div>
      </HeroBackground>

      {/* Section Divider */}
      <SectionDivider variant="circuit" colorScheme="primary" />

      {/* Video Library Grid */}
      <section className="section-spacing">
        <div className="container">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <StaggerItem key={index}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative bg-muted">
                    <iframe
                      src={video.videoUrl}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-medium line-clamp-2">
                      {video.title}
                    </CardTitle>
                  </CardHeader>
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
                Interested in Seeing More?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg mb-10 opacity-90 font-light">
                Contact us to access detailed samples and discuss how we can help with your specific requirements.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

