import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const navigation = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Leadership Team', href: '/about#leadership' },
      { name: 'Careers', href: '/about/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    solutions: [
      { name: 'Generative AI Consulting', href: '/solutions/generative-ai' },
      { name: 'AI Integration Services', href: '/solutions/ai-integration' },
      { name: 'Custom AI Model Development', href: '/solutions/custom-ai-models' },
      { name: 'MLOps & Model Deployment', href: '/solutions/mlops' },
      { name: 'AI Strategy & Transformation', href: '/solutions/ai-strategy' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Resources Hub', href: '/resources' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Use', href: '/legal/terms' },
      { name: 'Sitemap', href: '/sitemap' },
    ],
  };

  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/NeblifyLogo.png"
                alt="Neblify Logo"
                width={180}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Delivering cutting-edge AI, ML, Generative AI, DevOps and Cloud cost
              optimization services.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  B33, Hilton Tower, Datta Jagadamba Marg,<br />
                  Sher-e-punjab, Andheri East, Mumbai 400093
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <div className="text-muted-foreground">
                  <div>+91 9920770489</div>
                  <div>Sales: +91 9082933404</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div className="text-muted-foreground">
                  <a href="mailto:sales@neblify.com" className="hover:text-foreground transition-colors">
                    sales@neblify.com
                  </a>
                  <br />
                  <a href="mailto:support@neblify.com" className="hover:text-foreground transition-colors">
                    support@neblify.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Neblify Solution Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* Add social media links when provided */}
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              X (Twitter)
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
