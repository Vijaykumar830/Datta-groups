import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const app = express(); // ✅ Must be defined first

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*", // Or restrict to your frontend URL
  })
);

// POST route to send email
app.post("/send-email", async (req, res) => {
  const { name, email, phone, company, service, message } = req.body;

  try {
    // Create transporter using your Gmail (App password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vijju830988@gmail.com", // Your Gmail
        pass: "ixxemzxsqjnzqhgv", // Gmail App Password
      },
    });

    const mailOptions = {
      from: `"${name}" <aravindhdattagroups@gmail.com>`, // Must use verified Gmail
      replyTo: email, // User email for reply
      to: ["aravindhdattagroups@gmail.com", "sairamdattagroups@gmail.com","vijju830988@gmail.com"], // Receiver emails
      subject: "Datta Groups Client New Contact Form Submission",
      html: `
        <h2>Datta Groups Client New Contact Form Submission</h2>
        <table border="1" cellspacing="0" cellpadding="8" style="border-collapse:collapse;">
          <tr><th>Full Name</th><td>${name}</td></tr>
          <tr><th>Email</th><td>${email}</td></tr>
          <tr><th>Phone</th><td>${phone || "-"}</td></tr>
          <tr><th>Company</th><td>${company || "-"}</td></tr>
          <tr><th>Service</th><td>${service || "-"}</td></tr>
          <tr><th>Message</th><td>${message}</td></tr>
        </table>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
