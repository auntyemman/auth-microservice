export function forgotPasswordTemplate(firstName: string, resetLink: string): string {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password</title>
  </head>
  <body>
    <p>Hello ${firstName},</p>
    
    <p>We received a request to reset your password. To reset your password, please click the link below:</p>
    
    <p><a href="${resetLink}">Reset Password</a></p>
    
    <p>If you did not request a password reset, you can safely ignore this email.</p>
    
    <p>Thank you,<br>Thrillers Travel</p>
  </body>
  </html>`;
}
