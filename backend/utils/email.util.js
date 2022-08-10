const nodemailer = require('nodemailer');
const aws = require('aws-sdk');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
require('dotenv').config();

const ses = new aws.SES({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ID,
        secretAccessKey: process.env.AWS_SECRET
    }
});

class Email {
    constructor(to) {
        this.to = to;
    }

    newTransport() {
        return nodemailer.createTransport(process.env.NODE_ENV === 'production' ? {
            SES: {
                ses,
                aws
            }
        } : {
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.MT_USER,
                pass: process.env.MT_PASSWORD
            }
        });
    };

    async send(template, subject, context) {

        const configEmail = await this.newTransport().use('compile', hbs({
            extName: 'hbs',
            viewEngine: {
                partialsDir: path.join(__dirname, '../views/partials'),
                defaultLayout: false
            },
            viewPath: path.join(__dirname, '../views')
        }));

        await configEmail.sendMail({
            from: process.env.MAIL_FROM,
            to: this.to,
            subject,
            template,
            context
        });
    };

    async sendWelcome(name) {
        await this.send('welcome', 'Welcome to our app', { name });
    };
};

module.exports = { Email };