# Deployment Guide - Neblify Website

This guide will help you deploy the Neblify website to production on Vercel.

## Prerequisites

- [ ] GitHub/GitLab/Bitbucket account with code pushed
- [ ] Vercel account (free tier works)
- [ ] Domain name configured (neblify.com)
- [ ] Resend API key for email functionality
- [ ] Google Analytics and Tag Manager IDs

## Step 1: Prepare for Deployment

### 1.1 Environment Variables

Create a `.env.production` file (do NOT commit this):

```env
# Email Service (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Contact Form Emails
CONTACT_EMAIL_TO=sales@neblify.com,support@neblify.com
CONTACT_EMAIL_FROM=noreply@neblify.com

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Site URL
NEXT_PUBLIC_SITE_URL=https://neblify.com
```

### 1.2 Build Test

Test the production build locally:

```bash
npm run build
npm run start
```

Visit `http://localhost:3000` and verify all pages work correctly.

## Step 2: Deploy to Vercel

### 2.1 Import Project

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Project"
3. Select your Git repository
4. Framework Preset: Next.js (auto-detected)

### 2.2 Configure Project

**Project Name:** neblify-website
**Framework:** Next.js
**Root Directory:** ./
**Build Command:** (leave default) `npm run build`
**Output Directory:** (leave default) `.next`
**Install Command:** (leave default) `npm install`

### 2.3 Add Environment Variables

In Vercel dashboard, go to:
**Settings** > **Environment Variables**

Add each variable from your `.env.production` file:

| Key | Value | Environment |
|-----|-------|-------------|
| RESEND_API_KEY | your_api_key | Production |
| CONTACT_EMAIL_TO | sales@neblify.com,support@neblify.com | Production |
| CONTACT_EMAIL_FROM | noreply@neblify.com | Production |
| NEXT_PUBLIC_GA_MEASUREMENT_ID | G-XXXXXXXXXX | Production |
| NEXT_PUBLIC_GTM_ID | GTM-XXXXXXX | Production |
| NEXT_PUBLIC_SITE_URL | https://neblify.com | Production |

### 2.4 Deploy

Click **"Deploy"** and wait for the build to complete (usually 2-3 minutes).

## Step 3: Configure Custom Domain

### 3.1 Add Domain in Vercel

1. Go to **Project Settings** > **Domains**
2. Click **"Add Domain"**
3. Enter: `neblify.com`
4. Add: `www.neblify.com` (optional)

### 3.2 Configure DNS

Vercel will provide DNS records. In your domain registrar's DNS settings, add:

**For neblify.com:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www.neblify.com:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Wait for DNS propagation (can take up to 48 hours, usually 15-30 minutes).

## Step 4: Post-Deployment Configuration

### 4.1 Verify Email Functionality

1. Visit https://neblify.com/contact
2. Submit a test contact form
3. Verify email received at sales@neblify.com and support@neblify.com

### 4.2 Verify Analytics

1. Install Google Tag Assistant Chrome extension
2. Visit your website
3. Verify GTM and GA4 tags are firing

### 4.3 Test SEO

1. Visit https://search.google.com/search-console
2. Add property: https://neblify.com
3. Submit sitemap: https://neblify.com/sitemap.xml

### 4.4 Performance Audit

Run Lighthouse audit:
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Run audit for all categories
4. Target scores: Performance >90, Accessibility >95, Best Practices >95, SEO >95

## Step 5: Content Updates

### 5.1 Add Branding Assets

Upload your logo and branding assets:
```bash
/public/images/logo.svg
/public/images/logo-dark.svg
/public/images/og-image.png (1200x630)
```

Update `components/sections/header.tsx` to use actual logo.

### 5.2 Update Team Information

Edit `/app/about/page.tsx` with:
- Actual team member names, roles, and bios
- Team photos (upload to `/public/images/team/`)

### 5.3 Add Social Media Links

Update `/components/sections/footer.tsx` with actual URLs:
- LinkedIn: https://linkedin.com/company/neblify
- Twitter/X: https://twitter.com/neblify
- Instagram: https://instagram.com/neblify
- Facebook: https://facebook.com/neblify

### 5.4 Write Blog Posts

Create blog posts in `/content/blog/`:

```mdx
---
title: "Your Blog Post Title"
date: "2025-01-20"
excerpt: "Brief description of the post"
author: "Author Name"
tags: ["AI", "Machine Learning"]
image: "/images/blog/post-image.jpg"
---

Your content here...
```

## Step 6: Monitoring and Maintenance

### 6.1 Set Up Monitoring

- **Vercel Analytics:** Enabled by default
- **Vercel Speed Insights:** Enable in project settings
- **Google Search Console:** Monitor search performance
- **Google Analytics 4:** Monitor user behavior

### 6.2 Regular Updates

- **Weekly:** Review and respond to contact form submissions
- **Bi-weekly:** Publish new blog posts
- **Monthly:** Review analytics and update content
- **Quarterly:** Review and update service offerings, case studies

### 6.3 Security Updates

- **Dependencies:** Run `npm audit` monthly
- **Next.js:** Update to latest stable version quarterly
- **SSL Certificate:** Auto-renewed by Vercel

## Troubleshooting

### Build Failures

If deployment fails:
1. Check build logs in Vercel dashboard
2. Verify all environment variables are set
3. Test build locally: `npm run build`
4. Check for TypeScript errors

### Email Not Sending

1. Verify RESEND_API_KEY is correct
2. Check Resend dashboard for delivery status
3. Verify sender email is verified in Resend
4. Check spam folder

### Analytics Not Working

1. Verify GA_MEASUREMENT_ID and GTM_ID are correct
2. Check Google Tag Assistant
3. Ensure environment variables are in "Production" environment
4. Clear browser cache and test

### Domain Not Working

1. Verify DNS records are correct
2. Wait for DNS propagation (up to 48 hours)
3. Check domain status in Vercel dashboard
4. Try accessing via www subdomain

## Support

For deployment issues:
- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Support:** support@neblify.com

---

**Last Updated:** January 2025
**Version:** 1.0.0
