export default {
  /**
   * Protocol SMTP
   */

  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false, // use SSL
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};
