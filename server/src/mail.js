import nodemailer from 'nodemailer';

export function hasSmtpConfig() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function sendContactEmail(contactMessage) {
  if (!hasSmtpConfig()) {
    return {
      sent: false,
      reason: 'SMTP no configurado. El mensaje fue guardado en la base local.'
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_TO_EMAIL || 'martinboiero9@gmail.com',
    replyTo: contactMessage.email,
    subject: `Nuevo mensaje del portfolio de ${contactMessage.name}`,
    text: [
      `Nombre: ${contactMessage.name}`,
      `Email: ${contactMessage.email}`,
      '',
      contactMessage.message
    ].join('\n')
  });

  return { sent: true };
}
