// app/api/subscribe-newsletter/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email, source = 'footer' } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Please provide a valid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing environment variables');
      return new Response(
        JSON.stringify({ error: 'Email service configuration error.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create email transporter
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

    // Verify connection
    await transporter.verify();
    console.log('Email transporter verified successfully');

    // Email to Admin about new subscriber
    const adminMailOptions = {
      from: `"Newsletter Subscription" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2c154f; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #2c154f; }
            .value { margin-top: 5px; color: #555; }
            .badge { 
              display: inline-block; 
              padding: 4px 12px; 
              background: #2c154f; 
              color: white; 
              font-size: 12px; 
              border-radius: 4px;
              margin-bottom: 20px;
            }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #777; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Newsletter Subscription</h2>
              <div class="badge">Source: ${source === 'footer' ? 'Footer Newsletter' : 'Website'}</div>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Subscriber Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Subscription Date:</div>
                <div class="value">${new Date().toLocaleString()}</div>
              </div>
            </div>
            <div class="footer">
              <p>This subscriber has signed up for your newsletter.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Welcome email to Subscriber
    const subscriberMailOptions = {
      from: `"Insight Integrators" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Welcome to Insight Integrators Newsletter',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2c154f; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .welcome { font-size: 18px; color: #2c154f; margin-bottom: 20px; }
            .features { margin: 20px 0; padding-left: 20px; }
            .features li { margin: 10px 0; color: #555; }
            .button {
              display: inline-block;
              padding: 12px 24px;
              background: #2c154f;
              color: white;
              text-decoration: none;
              border-radius: 4px;
              margin: 20px 0;
            }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #777; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Welcome to Insight Integrators!</h2>
            </div>
            <div class="content">
              <p class="welcome">Dear Subscriber,</p>
              <p>Thank you for subscribing to our newsletter! We're excited to have you join our community of forward-thinking professionals.</p>
              
              <p>As a subscriber, you'll receive:</p>
              <ul class="features">
                <li>✓ Latest industry insights and trends</li>
                <li>✓ Exclusive updates on UAE tax and compliance</li>
                <li>✓ Expert analysis and thought leadership</li>
                <li>✓ Upcoming events and webinars</li>
                <li>✓ Special offers and announcements</li>
              </ul>
              
              <p>We send newsletters bi-weekly, ensuring you stay informed without overwhelming your inbox.</p>
              
              <center>
                <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'https://insightintegrators.ae'}/blogs" class="button">
                  Explore Our Latest Insights
                </a>
              </center>
              
              <p>If you ever wish to unsubscribe, you can click the unsubscribe link at the bottom of any newsletter email.</p>
              
              <p>Best regards,<br>
              <strong>The Insight Integrators Team</strong><br>
              Meydan Grandstand, Nad Al Sheba, Dubai, UAE</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Insight Integrators. All rights reserved.</p>
              <p>You received this email because you subscribed to our newsletter.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    console.log('Sending admin notification...');
    await transporter.sendMail(adminMailOptions);
    console.log('Admin notification sent successfully');
    
    console.log('Sending welcome email to subscriber...');
    await transporter.sendMail(subscriberMailOptions);
    console.log('Welcome email sent successfully');

    // Here you could also store the email in a database
    // For now, we'll just send emails

    return new Response(
      JSON.stringify({ success: true, message: 'Subscribed successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending subscription email:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to subscribe. Please try again later.',
        details: error.message 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}