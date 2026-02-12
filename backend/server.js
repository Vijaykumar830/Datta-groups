import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

/* ---------------- LOAD ENV ---------------- */
dotenv.config();

const app = express();

/* ---------------- MIDDLEWARE ---------------- */
app.use(express.json());

app.use(
  cors({
    origin: "*", // restrict later to Netlify domain if needed
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

/* ---------------- HEALTH CHECK ---------------- */
app.get("/", (req, res) => {
  res.status(200).send("Backend is running ✅");
});

/* ---------------- SEND EMAIL ---------------- */
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, phone, company, service, message } = req.body;

    /* ---------- VALIDATION ---------- */
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    /* ---------- TRANSPORTER ---------- */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* ---------- SEND MAIL ---------- */
    await transporter.sendMail({
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
        <table border="1" cellspacing="0" cellpadding="8" style="border-collapse:collapse;">
          <tr><th>Name</th><td>${name}</td></tr>
          <tr><th>Email</th><td>${email}</td></tr>
          <tr><th>Phone</th><td>${phone || "-"}</td></tr>
          <tr><th>Company</th><td>${company || "-"}</td></tr>
          <tr><th>Service</th><td>${service || "-"}</td></tr>
          <tr><th>Message</th><td>${message}</td></tr>
        </table>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Email failed",
    });
  }
});

/* ---------------- START SERVER ---------------- */
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
