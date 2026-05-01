// app/api/send-whistleblowing-email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    const categories = JSON.parse(formData.get('categories') || '[]');
    const relationship = formData.get('relationship');
    const awareness = formData.get('awareness');
    const location = formData.get('location');
    const description = formData.get('description');
    const attachment = formData.get('attachment');

    // Configure email transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

    // Prepare email content
    const categoriesList = categories.length > 0 
      ? categories.map(cat => `• ${cat}`).join('\n')
      : 'No categories selected';

    const emailContent = `
      **WHISTLEBLOWING REPORT - CONFIDENTIAL**
      
      --- Report Details ---
      
      **Categories Reported:**
      ${categoriesList}
      
      **Relationship with Company:**
      ${relationship || 'Not specified'}
      
      **How they became aware:**
      ${awareness || 'Not specified'}
      
      **Location of Incident:**
      ${location || 'Not specified'}
      
      **Detailed Description:**
      ${description || 'No description provided'}
      
      ---
      This report was submitted anonymously through the Whistleblowing Service.
      A password-protected link should be generated for further communication.
    `;

    // Send email to admin
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.WHISTLEBLOWING_RECIPIENT_EMAIL || 'shubshukla2332@gmail.com',
      subject: `[CONFIDENTIAL] Whistleblowing Report - ${new Date().toLocaleDateString()}`,
      text: emailContent,
      headers: {
        'Confidential': 'true',
        'X-Priority': '1'
      }
    };

    // Add attachment if provided
    if (attachment && attachment.size > 0) {
      const bytes = await attachment.arrayBuffer();
      const buffer = Buffer.from(bytes);
      mailOptions.attachments = [
        {
          filename: attachment.name,
          content: buffer,
          contentType: attachment.type
        }
      ];
    }

    await transporter.sendMail(mailOptions);

    // Generate a unique password-protected link (simplified version)
    const reportId = Date.now().toString(36) + Math.random().toString(36).substr(2, 8);
    const accessToken = Math.random().toString(36).substr(2, 16);
    
    // In a real implementation, store this in a database
    // const reportLink = `${process.env.NEXT_PUBLIC_BASE_URL}/whistleblowing/report/${reportId}?token=${accessToken}`;

    return NextResponse.json({ 
      success: true, 
      message: 'Report submitted successfully',
      reportId: reportId
    }, { status: 200 });

  } catch (error) {
    console.error('Error sending whistleblowing email:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit report' 
    }, { status: 500 });
  }
}