import { buildHtml, extractField, extractMultilineField } from "@/lib/helper";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const message = body.message;

        if (!message) {
            return NextResponse.json(
                { message: "No message provided" },
                { status: 400 }
            );
        }

        // 🔒 Normalize fields (supports BOTH structured + body string)
        const normalized = {
            subject: message.subject || "New Website Lead",
            name: message.name || extractField(message.body, "Name"),
            email: message.email || extractField(message.body, "Email"),
            phone: message.phone || extractField(message.body, "Phone"),
            services: message.services || extractField(message.body, "Services"),
            details:
                message.details ||
                extractMultilineField(message.body, "Project Details"),
        };

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const htmlTemplate = buildHtml(normalized);

        const info = await transporter.sendMail({
            from: `"Dexnive Leads" <${process.env.SMTP_USER}>`,
            to: process.env.NEXT_PUBLIC_EMAIL_TO,
            subject: normalized.subject,
            html: htmlTemplate,
            text: `
Name: ${normalized.name}
Email: ${normalized.email}
Phone: ${normalized.phone}
Services: ${normalized.services}

Details:
${normalized.details}
      `,
        });

        return NextResponse.json(
            { message: "Email sent successfully", info },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { message: "Failed to send email", error: error.message },
            { status: 500 }
        );
    }
}
