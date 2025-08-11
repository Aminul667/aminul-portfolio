/* eslint-disable @typescript-eslint/no-explicit-any */
import envConfig from "@/config/envConfig";
import { generateContactEmailTemplate } from "@/lib/utils";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: envConfig.email_user,
      subject: `New Contact Message: ${subject}`,
      html: generateContactEmailTemplate({
        name,
        email,
        subject,
        message,
      }),
    });

    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (error: any) {
    console.error("Email sending error:", error.message);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
