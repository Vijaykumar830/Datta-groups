import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*", // Later you can restrict to Netlify URL
  })
);

// Health check (IMPORTANT for Render)
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// POST route to send email
app.post("/send-email", async (req, res) => {
  const { name, email, phone, company, service, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // ✅ ENV
        pass: process.env.EMAIL_PASS, // ✅ ENV
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: [
        "aravindhdattagroups@gmail.com",
        "sairamdattagroups@gmail.com",
        "vijju830988@gmail.com",
      ],
      subject: "Datta Groups – New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <table border="1" cellspacing="0" cellpadding="8">
          <tr><th>Name</th><td>${name}</td></tr>
          <tr><th>Email</th><td>${email}</td></tr>
          <tr><th>Phone</th><td>${phone || "-"}</td></tr>
          <tr><th>Company</th><td>${company || "-"}</td></tr>
          <tr><th>Service</th><td>${service || "-"}</td></tr>
          <tr><th>Message</th><td>${message}</td></tr>
        </table>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
