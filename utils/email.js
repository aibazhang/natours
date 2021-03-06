const nodemialer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create a transporter
  const transporter = nodemialer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PROT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    // Activate in gmail "less secure app" option
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'J.C. <example1@email.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html
  };

  // 3) Send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
