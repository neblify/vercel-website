'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, Video, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResourcesPage() {
  const resources = [
    {
      icon: BookOpen,
      title: 'Blog',
      description: 'Insights, tutorials, and updates on AI, ML, and cloud technologies from our team of experts.',
      href: '/blog',
      cta: 'Read Articles',
    },
    {
      icon: FileText,
      title: 'Case Studies',
      description: 'Real-world examples of how we\'ve helped businesses transform with AI and cloud solutions.',
      href: '/case-studies',
      cta: 'View Case Studies',
    },
    {
      icon: Video,
      title: 'Webinars & Events',
      description: 'Join our upcoming webinars and events to learn from AI experts and industry leaders.',
      href: '#webinars',
      cta: 'Coming Soon',
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
              Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our collection of resources to learn more about AI, ML, and cloud technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl mb-2">{resource.title}</CardTitle>
                      <CardDescription className="text-base">{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <Link href={resource.href}>
                        <Button variant="outline" className="w-full">
                          {resource.cta} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media Section - Placeholder for widget */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Follow Us on Social Media</h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with our latest insights, news, and updates.
            </p>
          </div>

          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Social Media Feed Widget Placeholder
              </p>
              <p className="text-sm text-muted-foreground">
                Integrate with Curator.io or EmbedSocial using your API key
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
