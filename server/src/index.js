import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './database.js';
import { ContactMessage } from './models/ContactMessage.js';
import { sendContactEmail } from './mail.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);
const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';

app.use(cors({ origin: clientUrl }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Nombre, email y mensaje son obligatorios.' });
    }

    const savedMessage = await ContactMessage.create({
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim()
    });

    const emailResult = await sendContactEmail(savedMessage);

    return res.status(201).json({
      message: emailResult.sent
        ? 'Mensaje enviado correctamente.'
        : 'Mensaje guardado correctamente. Configura SMTP para enviarlo por email.',
      emailSent: emailResult.sent
    });
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ message: 'Revisa el email ingresado.' });
    }

    console.error(error);
    return res.status(500).json({ message: 'No se pudo procesar el mensaje.' });
  }
});

await sequelize.sync();

app.listen(port, () => {
  console.log(`Servidor listo en http://localhost:${port}`);
});
