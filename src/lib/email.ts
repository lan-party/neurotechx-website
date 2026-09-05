'use server';
import nodemailer from "nodemailer";
import SMTPTransport from 'nodemailer/lib/smtp-transport';


const options: SMTPTransport.Options = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

const templates = {

    'welcome': 
    `<html>
        <p>Hello, {USER_EMAIL}! Thank you for joining the NeuroTechX online community. Below you'll find some places to get started.</p>

        <a href="https://neurotechx.slack.com">Join Slack</a>
    </html>`

};


function loadTemplate(templateName: string, placeholderValues: object){
    let content = templates[templateName as keyof typeof templates];

    for (const [placeholder, value] of Object.entries(placeholderValues)) {
        content = content.replaceAll(placeholder, value);
    }

    return content;
}

export async function sendWelcomeEmail(email: string){
    'use server';
    try{

        const transporter = nodemailer.createTransport(options);

        const htmlContent = loadTemplate("welcome", {'{USER_EMAIL}': email});

        await transporter.sendMail({
            from: `"NeuroTechX" ${process.env.SMTP_USER}`,
            to: email,
            subject: 'Welcome to NeuroTechX!',
            html: htmlContent
        });

        transporter.close();

    }catch(error){

        console.log(error);
    }
}
