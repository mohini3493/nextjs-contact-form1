import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone, email, message } = req.body;

    // Configure nodemailer with your SMTP server credentials
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email provider (Gmail, Outlook, etc.)
      port: 465,
      auth: {
        user: 'cse110360131025@gmail.com', // Your email address
        pass: 'cse110360131025', // Your email password or app password
      },
      // auth: {
      //   user: process.env.EMAIL_USER, // Your email address
      //   pass: process.env.EMAIL_PASS, // Your email password or app password
      // },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        // to: process.env.RECIPIENT_EMAIL, // Your recipient email
        to: 'cse110360131025@gmail.com', // Your recipient email
        subject: "New Contact Form Submission",
        text: `You received a new message from your website:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (err) {
      console.error("Error sending email:", err);
      res.status(500).json({ error: "Failed to send email." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
