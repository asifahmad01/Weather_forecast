import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

class AlertService {
  static async sendEmailAlert(weatherData) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ALERT_RECIPIENT,
        subject: `Weather Alert for ${weatherData.city}`,
        text: `The temperature in ${weatherData.city} has exceeded the threshold. Current temperature: ${weatherData.temp.toFixed(2)}°C.`,
      };

      await transporter.sendMail(mailOptions);
      console.log('Email alert sent successfully.');
    } catch (error) {
      console.error('Error sending email alert: ', error);
    }
  }
}

export default AlertService;
