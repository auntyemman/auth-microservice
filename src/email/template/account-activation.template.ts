export function accountActivationTemplate(firstName: string, activationLink: string) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Records Account Activation</title>
  </head>
  <body>
    <div style="max-width: 600px; margin: auto; padding: 20px; font-family: Arial, sans-serif">
      <h2>Account Activation</h2>
      <p>Hello ${firstName},</p>
      <p>An account has been created for you on Thrillers Travels. To activate your account, please click on the link below:</p>
      <p><a href="${activationLink}" style="display: inline-block; padding: 10px 20px; background-color: #add8e6; color: #fff; text-decoration: none; border-radius: 5px">Activate Your Account</a></p>
      <p>If the link doesn't work, you can copy and paste the following URL into your browser:</p>
      <p>${activationLink}</p>
      <p>Thank you!</p>
    </div>
  </body>
</html>`;
}
