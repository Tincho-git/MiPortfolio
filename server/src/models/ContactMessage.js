import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

export const ContactMessage = sequelize.define('ContactMessage', {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(160),
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});
