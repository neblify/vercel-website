import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SitemapPage() {
  const sitemap = {
    'Main Pages': [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    'Solutions': [
      { name: 'Solutions Overview', href: '/solutions' },
      { name: 'Generative AI Consulting', href: '/solutions/generative-ai' },
      { name: 'AI Integration Services', href: '/solutions/ai-integration' },
      { name: 'Custom AI Model Development', href: '/solutions/custom-ai-models' },
      { name: 'MLOps & Model Deployment', href: '/solutions/mlops' },
      { name: 'AI Strategy & Transformation', href: '/solutions/ai-strategy' },
      { name: 'Cloud Cost Optimization', href: '/solutions/cloud-optimization' },
    ],
    'Resources': [
      { name: 'Resources Hub', href: '/resources' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Client Testimonials', href: '/testimonials' },
    ],
    'Company': [
      { name: 'Mission & Vision', href: '/about#mission' },
      { name: 'Leadership Team', href: '/about#leadership' },
      { name: 'Company History', href: '/about#history' },
      { name: 'Careers', href: '/about/careers' },
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Use', href: '/legal/terms' },
    ],
  };

  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Sitemap</h1>
          <p className="text-xl text-muted-foreground">
            Navigate through all pages of the Neblify website.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(sitemap).map(([category, links]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
