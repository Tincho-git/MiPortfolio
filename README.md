# Portfolio Martin Boiero

Proyecto local de portfolio con frontend en React + Vite y backend en Node.js + Express + Sequelize.

## Requisitos

- Node.js 18 o superior
- npm

## Instalacion

```bash
npm run install:all
```

## Ejecutar en local

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:3001

## Contacto por email

El formulario guarda los mensajes con Sequelize en una base SQLite local. Para enviar correos reales a `martinboiero9@gmail.com`, copia `server/.env.example` como `server/.env` y completa los datos SMTP.

Sin SMTP configurado, la app confirma que el mensaje fue guardado localmente.
