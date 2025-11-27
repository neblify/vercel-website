'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'CTO',
      company: 'TechCorp Inc.',
      content: 'Neblify transformed our approach to AI. Their expertise in generative AI helped us build a chatbot that reduced our support costs by 70%. The team is knowledgeable, responsive, and truly understands business needs.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'VP of Engineering',
      company: 'DataFlow Systems',
      content: 'The MLOps pipeline that Neblify built for us has been game-changing. We can now deploy models in minutes instead of weeks, and the monitoring capabilities give us complete confidence in our AI systems.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder & CEO',
      company: 'AI Startup',
      content: 'Working with Neblify on our cloud cost optimization saved us over $100K annually. They identified inefficiencies we didn\'t even know existed and implemented solutions that improved both our costs and performance.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of Data Science',
      company: 'RetailMax',
      content: 'Neblify helped us build a custom recommendation system that increased our conversion rates by 35%. Their team took the time to understand our business and delivered a solution that exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'COO',
      company: 'Manufacturing Solutions',
      content: 'The predictive maintenance system developed by Neblify has dramatically reduced our equipment downtime. The ROI was clear within the first quarter, and the ongoing support has been excellent.',
      rating: 5,
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Product',
      company: 'FinTech Innovators',
      content: 'Neblify\'s AI strategy consulting helped us identify the right use cases for AI in our business. Their strategic approach and technical expertise made them invaluable partners in our digital transformation.',
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-spacing bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                Client Testimonials
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl text-muted-foreground font-light">
                Hear what our clients have to say about working with Neblify.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-spacing">
        <div className="container">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground font-light italic leading-relaxed">"{testimonial.content}"</p>
                  </CardHeader>
                  <CardContent>
                    <div className="border-t pt-4">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground font-light">{testimonial.role}</p>
                      <p className="text-sm text-primary font-light">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
