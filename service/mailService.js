var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, fromEmail, toEmail, otpText) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
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


  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          // console.error(err);
          reject(err);
        } else {
          // console.log(info);
          resolve(info);
        }
    });
});


}
