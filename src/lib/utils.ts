import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type TContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const generateContactEmailTemplate = ({
  name,
  email,
  subject,
  message,
}: TContactFormData): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            color: #212529;
            padding: 20px;
          }
          .container {
            max-width: 700px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #e1e1e1;
          }
          h2 {
            color: #0d6efd;
            margin-bottom: 20px;
          }
          p {
            line-height: 1.6;
          }
          .label {
            font-weight: bold;
          }
          .footer {
            font-size: 0.9em;
            color: #6c757d;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>New Portfolio Contact Message</h2>
          <p><span class="label">Name:</span> ${name}</p>
          <p><span class="label">Email:</span> ${email}</p>
          <p><span class="label">Subject:</span> ${subject}</p>
          <p><span class="label">Message:</span></p>
          <p>${message}</p>
          <div class="footer">
            This email was sent from your portfolio contact form.
          </div>
        </div>
      </body>
    </html>
  `;
};
