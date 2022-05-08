import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1556c63a9eef3e",
      pass: "cdf88649e4114d"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedgat.com>',
            to: 'Douglas <douglasfelipe-8@hotmail.com>',
            subject,
            html: body
        });
    };
}