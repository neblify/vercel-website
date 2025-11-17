'use server';

import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the data on the server side
    const validatedData = contactFormSchema.parse(data);

    // Prepare email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Type:</strong> ${validatedData.inquiryType === 'customer' ? 'Customer Inquiry' : 'Partner Inquiry'}</p>
      <p><strong>Name:</strong> ${validatedData.name}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
      ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email using Resend
    const result = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'noreply@neblify.com',
      to: process.env.CONTACT_EMAIL_TO?.split(',') || ['sales@neblify.com', 'support@neblify.com'],
      subject: `New ${validatedData.inquiryType === 'customer' ? 'Customer' : 'Partner'} Inquiry from ${validatedData.name}`,
      html: emailContent,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Contact form submission error:', error);

    if (error instanceof Error) {
      return { success: false, error: error.message };
    }

    return { success: false, error: 'An unexpected error occurred. Please try again.' };
  }
}
