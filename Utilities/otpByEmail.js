import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "",//need respective service provider for email transport
    host: "",//need host for email transport
    port: "",//need port for email transport
    auth: {
      user: "",//who will send email
      pass: "",//password of the email
    },
  });
  const mailOptions = {
    from: "",//from email address
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};
export default sendEmail;

