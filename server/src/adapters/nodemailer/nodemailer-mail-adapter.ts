import { MailAdapter, SendMailData } from '../mail-adapter'; 
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "99e20a932f27c0",
        pass: "650eabb34c93b1"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Mimo <mimorubber@gmail.com>',
            subject,
            html: body
        });
    }
}