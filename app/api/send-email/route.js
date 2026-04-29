// // app/api/send-email/route.js
// import nodemailer from 'nodemailer';

// export async function POST(request) {
//   console.log('API route called'); // Debug log
  
//   try {
//     const { fullName, email, phone, company, industry, message } = await request.json();
//     console.log('Form data received:', { fullName, email, phone }); // Debug log

//     // Validate required fields
//     if (!fullName || !email || !phone || !message) {
//       return new Response(
//         JSON.stringify({ error: 'Please fill in all required fields' }),
//         { status: 400, headers: { 'Content-Type': 'application/json' } }
//       );
//     }

//     // Check if environment variables are set
//     if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
//       console.error('Missing environment variables:', {
//         hasEmailUser: !!process.env.EMAIL_USER,
//         hasEmailPass: !!process.env.EMAIL_PASS
//       });
//       return new Response(
//         JSON.stringify({ error: 'Email service configuration error. Please contact administrator.' }),
//         { status: 500, headers: { 'Content-Type': 'application/json' } }
//       );
//     }

//     // Create email transporter with more detailed configuration
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       debug: true, // Enable debug output
//       logger: true, // Enable logger
//     });

//     // Verify connection
//     await transporter.verify();
//     console.log('Email transporter verified successfully');

//     // Email content for admin
//     const adminMailOptions = {
//       from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
//       to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
//       subject: `New Contact Form Submission from ${fullName}`,
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>
//             body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//             .container { max-width: 600px; margin: 0 auto; padding: 20px; }
//             .header { background: #2c154f; color: white; padding: 20px; text-align: center; }
//             .content { padding: 20px; background: #f9f9f9; }
//             .field { margin-bottom: 15px; }
//             .label { font-weight: bold; color: #2c154f; }
//             .value { margin-top: 5px; color: #555; }
//             .footer { text-align: center; padding: 20px; font-size: 12px; color: #777; }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//             <div class="header">
//               <h2>New Contact Form Submission</h2>
//             </div>
//             <div class="content">
//               <div class="field">
//                 <div class="label">Full Name:</div>
//                 <div class="value">${fullName}</div>
//               </div>
//               <div class="field">
//                 <div class="label">Email:</div>
//                 <div class="value">${email}</div>
//               </div>
//               <div class="field">
//                 <div class="label">Phone:</div>
//                 <div class="value">${phone}</div>
//               </div>
//               <div class="field">
//                 <div class="label">Company:</div>
//                 <div class="value">${company || 'Not provided'}</div>
//               </div>
//               <div class="field">
//                 <div class="label">Industry:</div>
//                 <div class="value">${industry || 'Not provided'}</div>
//               </div>
//               <div class="field">
//                 <div class="label">Message:</div>
//                 <div class="value">${message.replace(/\n/g, '<br>')}</div>
//               </div>
//             </div>
//             <div class="footer">
//               <p>This message was sent from your website contact form.</p>
//               <p>Sent on: ${new Date().toLocaleString()}</p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     };

//     // Email content for auto-reply to user
//     const userMailOptions = {
//       from: `"Insight Integrators" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: 'Thank you for contacting Insight Integrators',
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>
//             body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//             .container { max-width: 600px; margin: 0 auto; padding: 20px; }
//             .header { background: #2c154f; color: white; padding: 20px; text-align: center; }
//             .content { padding: 20px; background: #f9f9f9; }
//             .footer { text-align: center; padding: 20px; font-size: 12px; color: #777; }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//             <div class="header">
//               <h2>Thank You for Contacting Us</h2>
//             </div>
//             <div class="content">
//               <p>Dear ${fullName},</p>
//               <p>Thank you for reaching out to Insight Integrators. We have received your message and one of our team members will get back to you within 24 hours.</p>
//               <p>Here's a summary of your submission:</p>
//               <ul>
//                 <li><strong>Name:</strong> ${fullName}</li>
//                 <li><strong>Email:</strong> ${email}</li>
//                 <li><strong>Phone:</strong> ${phone}</li>
//                 <li><strong>Company:</strong> ${company || 'Not provided'}</li>
//                 <li><strong>Industry:</strong> ${industry || 'Not provided'}</li>
//               </ul>
//               <p>If you have any urgent matters, please don't hesitate to call us directly at +971 50 889 6810.</p>
//               <p>Best regards,<br>The Insight Integrators Team</p>
//             </div>
//             <div class="footer">
//               <p>© ${new Date().getFullYear()} Insight Integrators. All rights reserved.</p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     };

//     // Send both emails
//     console.log('Sending admin email...');
//     await transporter.sendMail(adminMailOptions);
//     console.log('Admin email sent successfully');
    
//     console.log('Sending user auto-reply...');
//     await transporter.sendMail(userMailOptions);
//     console.log('User auto-reply sent successfully');

//     return new Response(
//       JSON.stringify({ success: true, message: 'Email sent successfully!' }),
//       { status: 200, headers: { 'Content-Type': 'application/json' } }
//     );
//   } catch (error) {
//     console.error('Detailed error:', {
//       message: error.message,
//       code: error.code,
//       command: error.command,
//       response: error.response
//     });
    
//     return new Response(
//       JSON.stringify({ 
//         error: 'Failed to send email. Please try again later.',
//         details: error.message 
//       }),
//       { status: 500, headers: { 'Content-Type': 'application/json' } }
//     );
//   }
// }


// app/api/send-email/route.js
// import nodemailer from 'nodemailer';

// export async function POST(request) {
//   console.log('API route called');
  
//   try {
//     const body = await request.json();
//     const { 
//       fullName, 
//       email, 
//       phone, 
//       company, 
//       industry, 
//       message,
//       designation,
//       source = 'contact-page' // 'contact-page' or 'consult-popup'
//     } = body;
    
//     console.log('Form data received:', { fullName, email, phone, source });

//     // Validate required fields
//     if (!fullName || !email || !phone || !message) {
//       return new Response(
//         JSON.stringify({ error: 'Please fill in all required fields' }),
//         { status: 400, headers: { 'Content-Type': 'application/json' } }
//       );
//     }

//     // Check if environment variables are set
//     if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
//       console.error('Missing environment variables:', {
//         hasEmailUser: !!process.env.EMAIL_USER,
//         hasEmailPass: !!process.env.EMAIL_PASS
//       });
//       return new Response(
//         JSON.stringify({ error: 'Email service configuration error. Please contact administrator.' }),
//         { status: 500, headers: { 'Content-Type': 'application/json' } }
//       );
//     }

//     // Create email transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Verify connection
//     await transporter.verify();
//     console.log('Email transporter verified successfully');

//     // Determine email subject based on source
//     const emailSubject = source === 'consult-popup' 
//       ? `New Consultation Request from ${fullName}`
//       : `New Contact Form Submission from ${fullName}`;

//     // Build form data HTML for admin
//     let adminFormHtml = `
//       <div class="field">
//         <div class="label">Full Name:</div>
//         <div class="value">${fullName}</div>
//       </div>
//       <div class="field">
//         <div class="label">Email:</div>
//         <div class="value">${email}</div>
//       </div>
//       <div class="field">
//         <div class="label">Phone:</div>
//         <div class="value">${phone}</div>
//       </div>
//     `;

//     // Add company if present
//     if (company) {
//       adminFormHtml += `
//         <div class="field">
//           <div class="label">Company Name:</div>
//           <div class="value">${company}</div>
//         </div>
//       `;
//     }

//     // Add designation if present (from consult popup)
//     if (designation) {
//       adminFormHtml += `
//         <div class="field">
//           <div class="label">Designation:</div>
//           <div class="value">${designation}</div>
//         </div>
//       `;
//     }

//     // Add industry if present
//     if (industry && industry !== 'Select Industry') {
//       adminFormHtml += `
//         <div class="field">
//           <div class="label">Industry:</div>
//           <div class="value">${industry}</div>
//         </div>
//       `;
//     }

//     // Add message
//     adminFormHtml += `
//       <div class="field">
//         <div class="label">Message:</div>
//         <div class="value">${message.replace(/\n/g, '<br>')}</div>
//       </div>
//     `;

//     // Email content for admin
//     const adminMailOptions = {
//       from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
//       to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
//       subject: emailSubject,
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>
//             body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//             .container { max-width: 600px; margin: 0 auto; padding: 20px; }
//             .header { background: #2c154f; color: white; padding: 20px; text-align: center; }
//             .content { padding: 20px; background: #f9f9f9; }
//             .field { margin-bottom: 15px; }
//             .label { font-weight: bold; color: #2c154f; }
//             .value { margin-top: 5px; color: #555; }
//             .badge { 
//               display: inline-block; 
//               padding: 4px 12px; 
//               background: #2c154f; 
//               color: white; 
//               font-size: 12px; 
//               border-radius: 4px;
//               margin-bottom: 20px;
//             }
//             .footer { text-align: center; padding: 20px; font-size: 12px; color: #777; }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//             <div class="header">
//               <h2>${source === 'consult-popup' ? 'New Consultation Request' : 'New Contact Form Submission'}</h2>
//               <div class="badge">Source: ${source === 'consult-popup' ? 'Consultation Popup' : 'Contact Page'}</div>
//             </div>
//             <div class="content">
//               ${adminFormHtml}
//             </div>
//             <div class="footer">
//               <p>This message was sent from your website.</p>
//               <p>Sent on: ${new Date().toLocaleString()}</p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     };

//     // Auto-reply to user
//     const getUserReplyContent = () => {
//       if (source === 'consult-popup') {
//         return `
//           <p>Thank you for requesting a consultation with Insight Integrators. We have received your request and one of our experts will contact you within 24 hours to schedule a meeting.</p>
//           <p>In the meantime, if you have any urgent matters, please don't hesitate to call us directly at +971 50 889 6810.</p>
//         `;
//       } else {
//         return `
//           <p>Thank you for reaching out to Insight Integrators. We have received your message and one of our team members will get back to you within 24 hours.</p>
//           <p>If you have any urgent matters, please don't hesitate to call us directly at +971 50 889 6810.</p>
//         `;
//       }
//     };

//     const userMailOptions = {
//       from: `"Insight Integrators" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: source === 'consult-popup' 
//         ? 'Consultation Request Received - Insight Integrators'
//         : 'Thank you for contacting Insight Integrators',
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>
//             body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//             .container { max-width: 600px; margin: 0 auto; padding: 20px; }
//             .header { background: #2c154f; color: white; padding: 20px; text-align: center; }
//             .content { padding: 20px; background: #f9f9f9; }
//             .details { background: white; padding: 15px; margin: 20px 0; border-left: 3px solid #2c154f; }
//             .footer { text-align: center; padding: 20px; font-size: 12px; color: #777; }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//             <div class="header">
//               <h2>${source === 'consult-popup' ? 'Consultation Request Received' : 'We\'ve Received Your Message'}</h2>
//             </div>
//             <div class="content">
//               <p>Dear ${fullName},</p>
//               ${getUserReplyContent()}
//               <div class="details">
//                 <p><strong>Your Request Summary:</strong></p>
//                 <ul>
//                   <li><strong>Name:</strong> ${fullName}</li>
//                   <li><strong>Email:</strong> ${email}</li>
//                   <li><strong>Phone:</strong> ${phone}</li>
//                   ${company ? `<li><strong>Company:</strong> ${company}</li>` : ''}
//                   ${designation ? `<li><strong>Designation:</strong> ${designation}</li>` : ''}
//                   ${industry && industry !== 'Select Industry' ? `<li><strong>Industry:</strong> ${industry}</li>` : ''}
//                 </ul>
//               </div>
//               <p>Best regards,<br>The Insight Integrators Team</p>
//             </div>
//             <div class="footer">
//               <p>© ${new Date().getFullYear()} Insight Integrators. All rights reserved.</p>
//               <p>Meydan Grandstand, Nad Al Sheba, Dubai, United Arab Emirates</p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     };

//     // Send both emails
//     console.log('Sending admin email...');
//     await transporter.sendMail(adminMailOptions);
//     console.log('Admin email sent successfully');
    
//     console.log('Sending user auto-reply...');
//     await transporter.sendMail(userMailOptions);
//     console.log('User auto-reply sent successfully');

//     return new Response(
//       JSON.stringify({ success: true, message: 'Email sent successfully!' }),
//       { status: 200, headers: { 'Content-Type': 'application/json' } }
//     );
//   } catch (error) {
//     console.error('Detailed error:', {
//       message: error.message,
//       code: error.code,
//       command: error.command,
//       response: error.response
//     });
    
//     return new Response(
//       JSON.stringify({ 
//         error: 'Failed to send email. Please try again later.',
//         details: error.message 
//       }),
//       { status: 500, headers: { 'Content-Type': 'application/json' } }
//     );
//   }
// }














// app/api/send-email/route.js
import nodemailer from 'nodemailer';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request) {
  console.log('API route called');
  
  try {
    const formData = await request.formData();
    const source = formData.get('source') || 'contact-page';
    
    console.log('Form source:', source);

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

    // Handle Career Application
    if (source === 'careers') {
      const name = formData.get('name');
      const email = formData.get('email');
      const phone = formData.get('phone');
      const position = formData.get('position');
      const message = formData.get('message');
      const resume = formData.get('resume');

      // Validate required fields
      if (!name || !email || !position) {
        return new Response(
          JSON.stringify({ error: 'Please fill in all required fields' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

      let resumePath = null;
      let resumeBuffer = null;
      let resumeFilename = null;

      // Handle file upload if present
      if (resume && resume.size > 0) {
        const bytes = await resume.arrayBuffer();
        const buffer = Buffer.from(bytes);
        resumeBuffer = buffer;
        
        // Create filename with timestamp
        const timestamp = Date.now();
        const originalName = resume.name;
        const extension = path.extname(originalName);
        resumeFilename = `${timestamp}_${name.replace(/\s/g, '_')}${extension}`;
        
        // Save file temporarily (optional - for local storage)
        try {
          const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'resumes');
          await mkdir(uploadDir, { recursive: true });
          resumePath = path.join(uploadDir, resumeFilename);
          await writeFile(resumePath, buffer);
          console.log('Resume saved:', resumePath);
        } catch (fileError) {
          console.error('Error saving file:', fileError);
        }
      }

      // Email to Admin
      const adminMailOptions = {
        from: `"Career Application" <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
        subject: `New Job Application: ${position} - ${name}`,
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
                <h2>New Job Application Received</h2>
                <div class="badge">Position: ${position}</div>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Applicant Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${phone || 'Not provided'}</div>
                </div>
                <div class="field">
                  <div class="label">Position Applied:</div>
                  <div class="value">${position}</div>
                </div>
                <div class="field">
                  <div class="label">Cover Letter:</div>
                  <div class="value">${message ? message.replace(/\n/g, '<br>') : 'No cover letter provided'}</div>
                </div>
                ${resumeFilename ? `
                <div class="field">
                  <div class="label">Resume/CV:</div>
                  <div class="value">${resumeFilename}</div>
                </div>
                ` : ''}
              </div>
              <div class="footer">
                <p>Application submitted on: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </body>
          </html>
        `,
        attachments: resumeBuffer ? [
          {
            filename: resumeFilename,
            content: resumeBuffer,
            contentType: resume.type,
          }
        ] : []
      };

      // Auto-reply to Applicant
      const userMailOptions = {
        from: `"Insight Integrators HR" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Application Received: ${position} at Insight Integrators`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #2c154f; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; background: #f9f9f9; }
              .details { background: white; padding: 15px; margin: 20px 0; border-left: 3px solid #2c154f; }
              .footer { text-align: center; padding: 20px; font-size: 12px; color: #777; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Thank You for Your Application</h2>
              </div>
              <div class="content">
                <p>Dear ${name},</p>
                <p>Thank you for applying for the <strong>${position}</strong> position at Insight Integrators Management Consultancies LLC-FZ.</p>
                <p>We have received your application and our HR team will review it carefully. If your qualifications match our requirements, we will contact you within 5-7 business days to schedule an interview.</p>
                <div class="details">
                  <p><strong>Application Summary:</strong></p>
                  <ul>
                    <li><strong>Position:</strong> ${position}</li>
                    <li><strong>Application Date:</strong> ${new Date().toLocaleDateString()}</li>
                    ${phone ? `<li><strong>Contact Number:</strong> ${phone}</li>` : ''}
                  </ul>
                </div>
                <p>In the meantime, if you have any questions, please don't hesitate to reach out to us at careers@insightintegrators.ae</p>
                <p>Best regards,<br><strong>HR Team</strong><br>Insight Integrators</p>
              </div>
              <div class="footer">
                <p>© ${new Date().getFullYear()} Insight Integrators. All rights reserved.</p>
                <p>Meydan Grandstand, Nad Al Sheba, Dubai, United Arab Emirates</p>
              </div>
            </div>
          </body>
          </html>
        `,
      };

      // Send both emails
      console.log('Sending admin email with application...');
      await transporter.sendMail(adminMailOptions);
      console.log('Admin email sent successfully');
      
      console.log('Sending auto-reply to applicant...');
      await transporter.sendMail(userMailOptions);
      console.log('Auto-reply sent successfully');

      return new Response(
        JSON.stringify({ success: true, message: 'Application submitted successfully!' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Handle Contact Page and Consultation Popup (existing code)
    const body = await request.json();
    const { 
      fullName, 
      email, 
      phone, 
      company, 
      industry, 
      message,
      designation
    } = body;
    
    console.log('Form data received:', { fullName, email, phone, source });

    // Validate required fields
    if (!fullName || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: 'Please fill in all required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Determine email subject based on source
    const emailSubject = source === 'consult-popup' 
      ? `New Consultation Request from ${fullName}`
      : `New Contact Form Submission from ${fullName}`;

    // Build form data HTML for admin
    let adminFormHtml = `
      <div class="field">
        <div class="label">Full Name:</div>
        <div class="value">${fullName}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value">${email}</div>
      </div>
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value">${phone}</div>
      </div>
    `;

    if (company) {
      adminFormHtml += `
        <div class="field">
          <div class="label">Company Name:</div>
          <div class="value">${company}</div>
        </div>
      `;
    }

    if (designation) {
      adminFormHtml += `
        <div class="field">
          <div class="label">Designation:</div>
          <div class="value">${designation}</div>
        </div>
      `;
    }

    if (industry && industry !== 'Select Industry') {
      adminFormHtml += `
        <div class="field">
          <div class="label">Industry:</div>
          <div class="value">${industry}</div>
        </div>
      `;
    }

    adminFormHtml += `
      <div class="field">
        <div class="label">Message:</div>
        <div class="value">${message.replace(/\n/g, '<br>')}</div>
      </div>
    `;

    // Email content for admin
    const adminMailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: emailSubject,
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
              <h2>${source === 'consult-popup' ? 'New Consultation Request' : 'New Contact Form Submission'}</h2>
              <div class="badge">Source: ${source === 'consult-popup' ? 'Consultation Popup' : 'Contact Page'}</div>
            </div>
            <div class="content">
              ${adminFormHtml}
            </div>
            <div class="footer">
              <p>This message was sent from your website.</p>
              <p>Sent on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Auto-reply to user
    const getUserReplyContent = () => {
      if (source === 'consult-popup') {
        return `
          <p>Thank you for requesting a consultation with Insight Integrators. We have received your request and one of our experts will contact you within 24 hours to schedule a meeting.</p>
          <p>In the meantime, if you have any urgent matters, please don't hesitate to call us directly at +971 50 889 6810.</p>
        `;
      } else {
        return `
          <p>Thank you for reaching out to Insight Integrators. We have received your message and one of our team members will get back to you within 24 hours.</p>
          <p>If you have any urgent matters, please don't hesitate to call us directly at +971 50 889 6810.</p>
        `;
      }
    };

    const userMailOptions = {
      from: `"Insight Integrators" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: source === 'consult-popup' 
        ? 'Consultation Request Received - Insight Integrators'
        : 'Thank you for contacting Insight Integrators',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2c154f; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .details { background: white; padding: 15px; margin: 20px 0; border-left: 3px solid #2c154f; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #777; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>${source === 'consult-popup' ? 'Consultation Request Received' : 'We\'ve Received Your Message'}</h2>
            </div>
            <div class="content">
              <p>Dear ${fullName},</p>
              ${getUserReplyContent()}
              <div class="details">
                <p><strong>Your Request Summary:</strong></p>
                <ul>
                  <li><strong>Name:</strong> ${fullName}</li>
                  <li><strong>Email:</strong> ${email}</li>
                  <li><strong>Phone:</strong> ${phone}</li>
                  ${company ? `<li><strong>Company:</strong> ${company}</li>` : ''}
                  ${designation ? `<li><strong>Designation:</strong> ${designation}</li>` : ''}
                  ${industry && industry !== 'Select Industry' ? `<li><strong>Industry:</strong> ${industry}</li>` : ''}
                </ul>
              </div>
              <p>Best regards,<br>The Insight Integrators Team</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Insight Integrators. All rights reserved.</p>
              <p>Meydan Grandstand, Nad Al Sheba, Dubai, United Arab Emirates</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    console.log('Sending admin email...');
    await transporter.sendMail(adminMailOptions);
    console.log('Admin email sent successfully');
    
    console.log('Sending user auto-reply...');
    await transporter.sendMail(userMailOptions);
    console.log('User auto-reply sent successfully');

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response
    });
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email. Please try again later.',
        details: error.message 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}