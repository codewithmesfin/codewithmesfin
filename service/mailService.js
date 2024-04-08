var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject,fromEmail, toEmail, otpText) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    tls: {
        ciphers: "SSLv3",
    },
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    replyTo: fromEmail,
    subject: subject,
    text: otpText,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}